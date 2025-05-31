import * as S from './Project.styled';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import type { JoinedProject } from '../../../../models/userProject';
import beginner from '../../../../assets/beginner.svg';
import { ROUTES } from '../../../../constants/routes';

interface ProjectProps {
  project: JoinedProject;
  canEvaluate?: boolean;
}

const Project = ({ project, canEvaluate }: ProjectProps) => {
  const maxSkills = 4;
  const skillsShow = project.skills.slice(0, maxSkills);
  return (
    <S.Container>
      <S.Title>{project.title}</S.Title>
      <S.Date>
        <S.DateWrapper>
          <span>시작일</span>
        </S.DateWrapper>
        <span>{project.recruitmentEndDate}</span>
      </S.Date>
      <S.Member>
        <S.Wrapper>
          <S.Beginner>
            {project.isBeginner ? <img src={beginner} alt='beginner' /> : ''}
          </S.Beginner>
          <span>{project.totalMember}명</span>
        </S.Wrapper>
        <S.State>{project.isDone ? '모집 마감' : '모집 중'}</S.State>
      </S.Member>
      <S.Skill>
        <S.SkillArea>
          {skillsShow.map((skill) => (
            <img key={skill.id} src={skill.img} />
          ))}
          {project.skills.length > maxSkills && (
            <EllipsisHorizontalIcon width='20' height='20' />
          )}
        </S.SkillArea>
        {canEvaluate && (
          <S.EvaluateButton
            key={project.id}
            to={`${ROUTES.evaluation}/${project.id}`}
            state={{ isAllCompleted: project.isAllEvaluated }}
            $isCompleted={project.isAllEvaluated}
          >
            {project.isAllEvaluated ? '평가완료' : '평가하기'}
          </S.EvaluateButton>
        )}
      </S.Skill>
    </S.Container>
  );
};

export default Project;
