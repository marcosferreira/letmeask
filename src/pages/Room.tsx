import { useParams } from 'react-router-dom';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import logoSGV from '../assets/images/logo.svg';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function Room() {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoSGV} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />

          <div className="form-footer">
            <span>
              Para enviar uma pergunta <button> faça seu login.</button>
            </span>
            <Button type="submit">Envar Pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
