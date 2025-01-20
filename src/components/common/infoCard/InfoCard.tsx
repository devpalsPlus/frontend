import type { PropsWithChildren } from 'react';
import * as S from './InfoCard.styled';

const InfoCard = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};

export default InfoCard;
