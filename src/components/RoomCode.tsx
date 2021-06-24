import copySVG from '../assets/images/copy.svg';
import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copySVG} alt="Copiar código da sala" />
      </div>
      <span>Sala #-McxW4fzNzCRb7ki15tF</span>
    </button>
  );
}
