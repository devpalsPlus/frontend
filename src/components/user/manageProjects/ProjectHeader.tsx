import * as S from './ProjectHeader.styled';
import Title from '../../common/title/Title';
import { ProjectDetailPlusExtended } from '../../../models/projectDetail';
import RecruitmentDate from './RecruitmentDate';
import React from 'react';
interface ProjectHeaderProps {
  projectData: ProjectDetailPlusExtended;
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

export default React.memo(ProjectHeader);
