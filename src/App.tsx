import { useState, useEffect } from "react";
import { createContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { auth, firebase } from "./services/firebase";

type User = {
  id: String;
  name: String;
  avatar: String;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    })
  }, [])

  async function signInWithGoogle() {
    const provide = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provide);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
