import * as S from './Card.styled';
import type { ManagedProject } from '../../../models/manageMyProject';
import AvatarList from '../../common/avatar/AvatarList';
import { formatDate } from '../../../util/formatDate';
import { ROUTES } from '../../../constants/routes';
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
      <AvatarList maxCount={5} avatars={project.skills} />

      <S.ButtonWrapper>
        {project.canEvaluate && (
          <S.EvaluateButton
            key={project.id}
            to={`${ROUTES.evaluation}/${project.id}`}
            state={{ isAllCompleted: project.isAllEvaluated }}
            $isCompleted={project.isAllEvaluated}
          >
            {project.isAllEvaluated ? '평가완료' : '평가하기'}
          </S.EvaluateButton>
        )}
        {project.isDone && <S.RecruitmentEnd>모집 종료</S.RecruitmentEnd>}
      </S.ButtonWrapper>
    </S.CardWrapper>
  );
}

export default Card;
