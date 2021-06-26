import { ReactNode } from 'react';
import { QuestionStyled, QuestionFooter } from './styles';

type QuestionProps = {
  content: String;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({ content, author, isAnswered = false, isHighlighted = false, children }: QuestionProps) {
  return (
    <QuestionStyled className={`${isAnswered ? 'answered' : ''} ${isHighlighted && !isAnswered ? 'highlighted': ''}`}>
      <p>{content}</p>
      <QuestionFooter>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </QuestionFooter>
    </QuestionStyled>
  );
}
