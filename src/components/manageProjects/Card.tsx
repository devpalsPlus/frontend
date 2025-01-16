import * as S from './Card.styled';
import type { ManagedProject } from '../../models/manageMyProject';
import AvartarList from '../common/avatar/AvartarList';
import Button from '../common/Button/Button';
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
      <AvartarList avatars={project.ProjectSkillTag} />

      <div className='buttonWrap'>
        <Button size='primary' schema='primary' radius='primary'>
          모집종료
        </Button>
      </div>
    </S.CardWrapper>
  );
}

export default Card;
