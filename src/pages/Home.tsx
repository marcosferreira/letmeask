import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

import IllustrationSVG from '../assets/images/illustration.svg';
import LogoSVG from '../assets/images/logo.svg';
import GoogleIconSVG from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationSVG} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoSVG} alt="Letmeask" />
          <button className="btn-create-room" onClick={handleCreateRoom}>
            <img src={GoogleIconSVG} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entra na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
