import * as S from './Project.styled';
import BeginnerIcon from '../../../assets/beginner.svg';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { JoinedProject } from '../../../../models/userProject';

interface ProjectProps {
  project: JoinedProject;
}

const Project = ({ project }: ProjectProps) => {
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
          <img key={skill.id} src={skill.img} />
        ))}
        {project.skills.length > maxSkills && (
          <EllipsisHorizontalIcon width='20' height='20' />
        )}
      </S.Skill>
    </S.Container>
  );
};

export default Project;
