import { UserJoinedProject } from '../../../models/userProject';
import * as S from './Project.styled';
import BeginnerIcon from '../../../assets/beginner.svg';
import { formatDate } from '../../../util/formatDate';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface ProjectProps {
  project: UserJoinedProject;
}

const Project = ({ project }: ProjectProps) => {
  const startProjectDate = formatDate(project.startDate);
  const maxSkills = 4;
  const skillsShow = project.ProjectSkillTag.slice(0, maxSkills);
  return (
    <S.Container>
      <S.Title>{project.title}</S.Title>
      <S.Date>
        <S.DateWrapper>
          <span>프로젝트 시작</span>
        </S.DateWrapper>
        <span>{startProjectDate}</span>
      </S.Date>
      <S.Member>
        <S.Wrapper>
          <S.Beginner>
            {project.isBeginner ? (
              <img src={BeginnerIcon} alt='beginner' />
            ) : (
              ''
            )}
          </S.Beginner>
          <span>{project.totalMember}명</span>
        </S.Wrapper>
        <S.State>{project.isDone ? '모집 마감' : '모집 중'}</S.State>
      </S.Member>
      <S.Skill>
        {skillsShow.map((skill) => (
          <img key={skill.SkillTag.id} src={skill.SkillTag.img} />
        ))}
        {project.ProjectSkillTag.length > maxSkills && (
          <EllipsisHorizontalIcon width='20' height='20' />
        )}
      </S.Skill>
    </S.Container>
  );
};

export default Project;
