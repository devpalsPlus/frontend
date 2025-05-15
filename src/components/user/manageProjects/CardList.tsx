import * as S from './CardList.styled';

import type { ManagedProject } from '../../../models/manageMyProject';
import Card from './Card';
import CreateButton from '../../assets/createProjectButton.svg';
import { ROUTES } from '../../../constants/user/routes';

interface CardListProps {
  projects: ManagedProject[];
}

function CardList({ projects }: CardListProps) {
  return (
    <S.CardListWrapper>
      <S.MoveProjectLink to={ROUTES.createProject}>
        <S.CreateButton>
          <img src={CreateButton} />새 프로젝트 추가
        </S.CreateButton>
      </S.MoveProjectLink>

      {projects?.map((data) => (
        <S.MoveProjectLink
          key={data.id}
          to={`${ROUTES.manageProjectsRoot}/${data.id}`}
        >
          <Card project={data} />
        </S.MoveProjectLink>
      ))}
    </S.CardListWrapper>
  );
}

export default CardList;
