import * as S from './MainCard.styled';
import arrowRight from '../../../assets/ArrowRight.svg';
import React from 'react';

interface MainCardProps {
  title: string;
  moreLink?: string;
  children: React.ReactNode;
}

const MainCard = ({ title, moreLink, children }: MainCardProps) => {
  return (
    <S.Container>
      <S.CardHeader>
        <S.Title>{title}</S.Title>
        {moreLink && (
          <S.ShowAllArea to={moreLink}>
            <S.ShowAllButton>전체 보기</S.ShowAllButton>
            <S.ArrowRight src={arrowRight} />
          </S.ShowAllArea>
        )}
      </S.CardHeader>
      <S.Line />
      <S.Wrapper>
        <S.MainContent>{children}</S.MainContent>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainCard;
