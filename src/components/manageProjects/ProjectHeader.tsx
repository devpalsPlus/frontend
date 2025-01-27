import * as S from './ProjectHeader.styled';
import Title from '../common/title/Title';
import { ProjectDetailExtended } from '../../models/projectDetail';
import RecruitmentDate from './RecruitmentDate';
interface ProjectHeaderProps {
  projectData: ProjectDetailExtended;
}

function ProjectHeader({ projectData }: ProjectHeaderProps) {
  return (
    <>
      <S.TitleWrapper>
        {projectData && <Title size='semiLarge'>{projectData.title} </Title>}
        {projectData?.isDone && <S.RecruitmentEnd>공고 마감</S.RecruitmentEnd>}
      </S.TitleWrapper>
      {projectData && <RecruitmentDate ProjectData={projectData} />}
    </>
  );
}

export default ProjectHeader;
