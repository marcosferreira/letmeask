import copySVG from '../../assets/images/copy.svg';
import { RoomCodeStyled } from './styles';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <RoomCodeStyled onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copySVG} alt="Copiar código da sala" />
      </div>
      <span>Sala {props.code}</span>
    </RoomCodeStyled>
  );
}
