import styled from 'styled-components';

export const RoomContainer = styled.div``;

export const NotAdminRoom = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;

    margin-top: 50px;
    padding: 40px;
    background-color: #fff;

    > p {
      font-size: 14px;
    }

    > a {
      height: 40px;
      border-radius: 8px;
      font-weight: 500;
      text-decoration: none;
      background-color: #835afd;
      color: #fff;
      padding: 0 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      img {
        margin-right: 8px;
      }

      &.outlined {
        background-color: #fff;
        color: #835afd;
        border: 1px solid #835afd;
      }

      &:not(:disabled):hover {
        filter: brightness(0.9);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`;
