import { forwardRef, PropsWithChildren } from 'react';
import * as S from './Modal.styled';

export const ModalBody = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return <S.ModalBody ref={ref}>{children}</S.ModalBody>;
  }
);
