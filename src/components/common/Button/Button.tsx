import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './Button.styled';
import {
  BorderRadiusSize,
  ButtonSchema,
  ButtonSize,
} from '../../../style/theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size: ButtonSize;
  schema: ButtonSchema;
  radius: BorderRadiusSize;
  disabled?: boolean;
}

function Button({
  children,
  size,
  schema,
  radius,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <S.CommonButton
      size={size}
      schema={schema}
      radius={radius}
      disabled={disabled}
      {...props}
    >
      {children}
    </S.CommonButton>
  );
}

export default Button;
