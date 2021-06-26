import styled from 'styled-components';

export const QuestionListStyled = styled.div`
  margin-top: 32px;

  .empty-questions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      max-width: 284px;
      text-align: center;

      display: flex;
      gap: 20px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500px;
        color: #000;
      }
      small {
        color: #999;
      }
    }
  }
`;
