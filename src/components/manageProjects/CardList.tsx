import * as S from './CardList.styled';

import { ManagedProject } from '../../models/manageMyProject';
import Card from './Card';
import CreateButton from '../../assets/createProjectButton.svg';

interface CardListProps {
  projects: ManagedProject[];
}

function CardList({ projects }: CardListProps) {
  return (
    <S.CardListWrapper>
      <S.CreateButton>
        <img src={CreateButton} />새 프로젝트 추가
      </S.CreateButton>

      {projects?.map((data) => (
        <Card key={data.id} project={data} />
      ))}
    </S.CardListWrapper>
  );
}

export default CardList;
