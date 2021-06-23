import { Button } from "../components/Button";

import IllustrationSVG from "../assets/images/illustration.svg";
import LogoSVG from "../assets/images/logo.svg";
import GoogleIconSVG from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={IllustrationSVG}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoSVG} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <a href="#">clique aqui</a></p>
        </div>
      </main>
    </div>
  );
}
