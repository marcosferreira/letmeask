import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { RoomCode } from '../RoomCode';

import logoSVG from '../../assets/images/logo.svg';

import { HeaderStyled } from './styles';

type HeaderProps = {
  roomId: string;
  handleCloseRoom?: Function;
};

export function Header(props: HeaderProps) {
  return (
    <HeaderStyled>
      <div className="content">
        <Link to="/">
          <img src={logoSVG} alt="Letmeask" />
        </Link>
        <div>
          <RoomCode code={props.roomId} />

          {props.handleCloseRoom ? (
            <Button isOutlined onClick={() => props.handleCloseRoom}>
              Encerrar a sala
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>
    </HeaderStyled>
  );
}
