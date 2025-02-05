import * as S from './CardList.styled';

import type { ManagedProject } from '../../models/manageMyProject';
import Card from './Card';
import CreateButton from '../../assets/createProjectButton.svg';
import { ROUTES } from '../../constants/routes';
import { Link } from 'react-router-dom';

interface CardListProps {
  projects: ManagedProject[];
}

function CardList({ projects }: CardListProps) {
  return (
    <S.CardListWrapper>
      <Link to={ROUTES.createProject}>
        <S.CreateButton>
          <img src={CreateButton} />새 프로젝트 추가
        </S.CreateButton>
      </Link>

      {projects?.map((data) => (
        <Link key={data.id} to={`${ROUTES.manageProjectsRoot}/${data.id}`}>
          <Card project={data} />
        </Link>
      ))}
    </S.CardListWrapper>
  );
}

export default CardList;
