import { useHistory, useParams } from 'react-router-dom';
import { useRoom } from '../hooks/useRoom';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';
import { database } from '../services/firebase';

import logoSVG from '../assets/images/logo.svg';
import deleteSVG from '../assets/images/delete.svg';
import checkSVG from '../assets/images/check.svg';
import answerSVG from '../assets/images/answer.svg';

import '../styles/room.scss';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleCloseRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
    history.push('/');
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoSVG} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleCloseRoom}>
              Encerrar a sala
            </Button>
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
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                      <img src={checkSVG} alt="Marcar pergunda como respondida" />
                    </button>
                    <button type="button" onClick={() => handleHighlightQuestion(question.id)}>
                      <img src={answerSVG} alt="Dar destaque a pergunta" />
                    </button>
                  </>
                )}
                <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                  <img src={deleteSVG} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
