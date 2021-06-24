import { useParams } from 'react-router-dom';
import { useRoom } from '../hooks/useRoom';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';

import logoSGV from '../assets/images/logo.svg';

import '../styles/room.scss';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoSGV} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar a sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length} {questions.length < 2 ? 'pergunta' : 'perguntas'}
            </span>
          )}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return <Question key={question.id} content={question.content} author={question.author} />;
          })}
        </div>
      </main>
    </div>
  );
}
