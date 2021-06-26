import { useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';

import { RoomContainer } from './styles';
import { Header } from '../../components/Header';
import { QuestionList } from '../../components/QuestionList';

type RoomParams = {
  id: string;
};

export function Room() {
  const [newQuestion, setNewQuestion] = useState('');

  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { user, signInWithGoogle } = useAuth();
  const { questions, titleRoom } = useRoom(roomId);

  async function sign() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') return;

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

    return (
    <RoomContainer>
      <Header roomId={roomId} />
      <main>
        <div className="room-title">
          <h1>{titleRoom}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length} {questions.length < 2 ? 'pergunta' : 'perguntas'}
            </span>
          )}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea placeholder="O que você quer perguntar?" onChange={(event) => setNewQuestion(event.target.value)} value={newQuestion} />

          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.avatar} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta <button onClick={sign}> faça seu login.</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Envar Pergunta
            </Button>
          </div>
        </form>

        <QuestionList />
      </main>
    </RoomContainer>
  );
}