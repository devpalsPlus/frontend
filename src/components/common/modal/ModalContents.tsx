import { PropsWithChildren } from 'react';
import * as S from './Modal.styled';

export const ModalContents = ({ children }: PropsWithChildren) => {
  return <S.ModalContents>{children}</S.ModalContents>;
};
