import { PropsWithChildren } from 'react';
import * as S from './Modal.styled';
interface ModalContainerProps {
  $fadeOut: boolean;
  onAnimationEnd: () => void;
}

export const ModalContainer = ({
  $fadeOut,
  onAnimationEnd,
  children,
}: PropsWithChildren<ModalContainerProps>) => {
  return (
    <S.ModalContainer $fadeOut={$fadeOut} onAnimationEnd={onAnimationEnd}>
      {children}
    </S.ModalContainer>
  );
};
