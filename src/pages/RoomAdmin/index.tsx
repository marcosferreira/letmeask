import { Link, useParams } from 'react-router-dom';
import { useRoom } from '../../hooks/useRoom';
import { useAuth } from '../../hooks/useAuth';
import { Header } from '../../components/Header';
import { database } from '../../services/firebase';


import { RoomContainer, NotAdminRoom } from './styles';
import { QuestionList } from '../../components/QuestionList';

type RoomParams = {
  id: string;
};

export function RoomAdmin() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { user } = useAuth();
  const { questions, titleRoom, authorRoom } = useRoom(roomId);

  async function handleCloseRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });
  }


  return (
    <RoomContainer>
      {authorRoom === user?.id ? (
        <>
          <Header roomId={roomId} handleCloseRoom={handleCloseRoom} />
          <main>
            <div className="room-title">
              <h1>
                {titleRoom} - {authorRoom}
              </h1>
              {questions.length > 0 && (
                <span>
                  {questions.length} {questions.length < 2 ? 'pergunta' : 'perguntas'}
                </span>
              )}
            </div>

            <QuestionList />
          </main>
        </>
      ) : (
        <>
          <Header roomId={roomId} />
          <NotAdminRoom>
            <div>
              <h2>Ops!!!</h2>
              <p>Você não é administrador dessa sala, por tanto não pode acessar esta funcionalidade!</p>
              <Link to={`/rooms/${roomId}`}>Clique aqui para voltar a sala</Link>
            </div>
          </NotAdminRoom>
        </>
      )}
    </RoomContainer>
  );
}
