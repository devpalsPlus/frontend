import { ReactNode } from 'react';
import * as S from './Modal.styled';
interface ModalContentIconProps {
  Icon: ReactNode;
}

export const ModalContentIcon = ({ Icon }: ModalContentIconProps) => {
  return <S.ModalIconWrapper>{Icon}</S.ModalIconWrapper>;
};
