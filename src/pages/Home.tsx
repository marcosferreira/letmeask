import IllustrationSVG from '../assets/images/illustration.svg';
import LogoSVG from '../assets/images/logo.svg';
import GoogleIconSVG from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={IllustrationSVG}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={LogoSVG} alt="Letmeask" />
          <button>
            <img src={GoogleIconSVG} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <button type="submit">
              Entra na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
