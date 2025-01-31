import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './Button.styled';
import {
  BorderRadiusSize,
  ButtonSchema,
  ButtonSize,
} from '../../../style/theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
}: PropsWithChildren<ButtonProps>) {
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
