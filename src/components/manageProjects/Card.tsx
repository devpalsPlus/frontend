import * as S from './Card.styled';
import type { ManagedProject } from '../../models/manageMyProject';
import AvartarList from '../common/avatar/AvartarList';
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
      <AvartarList maxCount={5} avatars={project.ProjectSkillTag} />

      <div className='buttonWrap'>
        {project.isDone && <S.RecruitmentEnd>모집 종료</S.RecruitmentEnd>}
      </div>
    </S.CardWrapper>
  );
}

export default Card;
