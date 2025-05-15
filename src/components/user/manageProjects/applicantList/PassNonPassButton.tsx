import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './PassNonPassButton.styled';
export interface PassNonPassButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPass: boolean;
  disabled?: boolean;
}
function PassNonPassButton({
  children,
  disabled,
  ...props
}: PropsWithChildren<PassNonPassButtonProps>) {
  return (
    <S.PassNonPassButton disabled={disabled} {...props}>
      {children}
    </S.PassNonPassButton>
  );
}

export default PassNonPassButton;
