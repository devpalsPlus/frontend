import CardList from './cardList.tsx/CardList';
import * as S from './ProjectCardLists.styled';

export default function ProjectCardLists() {
  return (
    <S.Container>
      <h1>프로젝트 리스트</h1>
      <CardList />
    </S.Container>
  );
}
