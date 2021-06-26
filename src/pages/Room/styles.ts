import styled from 'styled-components';

export const RoomContainer = styled.div`
  main {
    form {
      textarea {
        width: 100%;
        min-height: 130px;
        resize: vertical;
        padding: 16px;
        border: 0;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba($color: #000000, $alpha: 0.04);
        background-color: #fefefe;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        .user-info {
          display: flex;
          align-items: center;

          > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: #29292e;
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: #737380;
          font-weight: 500;

          button {
            align-self: flex-end;
            justify-self: flex-end;
            background: none;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .form-footer {
    flex-direction: column;
    gap: 20px;
  }
`;
