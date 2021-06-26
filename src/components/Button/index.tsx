import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return <ButtonStyled className={`${isOutlined ? 'outlined' : ''}`} {...props} />;
}
