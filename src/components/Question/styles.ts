import styled from 'styled-components';

export const QuestionStyled = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba($color: #000000, $alpha: 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  &.answered {
    background-color: #dbdcdd;
  }

  &.highlighted {
    background-color: #f4f0ff;
    border: 1px solid #835afd;

    footer .user-info span {
      color: #29292e;
    }
  }

  p {
    color: #29292e;
  }
`;

export const QuestionFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

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
      color: #737380;
      font-size: 14px;
    }
  }

  > div {
    display: flex;
    gap: 12px;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    span {
      font-size: 12px;
      align-self: flex-end;
    }

    &.like-button {
      display: flex;
      gap: 8px;
      align-items: center;
      color: #737380;

      &.liked {
        color: #835afd;

        svg path {
          stroke: #835afd;
          fill: #e3dcfc;
        }
      }
    }

    &.like-button:hover {
      filter: brightness(0.5);
    }
  }

  p {
    color: #737380;
    font-size: 14px;
  }
`;
