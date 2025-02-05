import * as S from './Card.styled';
import type { ManagedProject } from '../../models/manageMyProject';
import AvatarList from '../common/avatar/AvatarList';
import { formatDate } from '../../util/formatDate';
interface CardProps {
  project: ManagedProject;
}

function Card({ project }: CardProps) {
  const formatEndDate = formatDate(project.recruitmentEndDate);

  return (
    <S.CardWrapper>
      <S.CardTitle>{project.title}</S.CardTitle>
      <S.RecruitmentDate>{formatEndDate}까지</S.RecruitmentDate>
      <S.TotalMember>{project.totalMember}명</S.TotalMember>
      <AvatarList maxCount={5} avatars={project.ProjectSkillTag} />

      <S.ButtonWrapper>
        {project.isDone && <S.RecruitmentEnd>모집 종료</S.RecruitmentEnd>}
      </S.ButtonWrapper>
    </S.CardWrapper>
  );
}

export default Card;
