import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/HomePage';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { RoomAdmin } from './pages/RoomAdmin';

import { GlobalStyles } from './styles/GlobaStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <AuthContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={RoomAdmin} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
