import * as S from './MainCard.styled';
import arrowRight from '../../../assets/ArrowRight.svg';

interface MainCardProps {
  children: React.ReactNode;
}

const MainCard = ({ children }: MainCardProps) => {
  return (
    <S.Container>
      <S.CardHeader>
        <S.Title>공지시항</S.Title>
        <S.ShowAllArea>
          <S.ShowAllButton>전체 보기</S.ShowAllButton>
          <S.ArrowRight src={arrowRight} />
        </S.ShowAllArea>
      </S.CardHeader>
      <S.Line />
      <S.Wrapper>
        <S.MainContent>{children}</S.MainContent>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainCard;
