import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      .button {
        height: 40px;
      }
    }
  }

  @media (max-width: 500px) {
    .content {
      display: flex;
      flex-direction: column;
      gap: 10px;

      > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;
