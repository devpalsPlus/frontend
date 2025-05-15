import { ProjectDetailPlus } from '../../../models/projectDetail';
import { formatDate } from '../../../util/formatDate';
import * as S from './RecruitmentDate.styled';
interface RecruitmentDateProps {
  ProjectData: ProjectDetailPlus;
}

function RecruitmentDate({ ProjectData }: RecruitmentDateProps) {
  const startDate = formatDate(ProjectData.recruitmentStartDate);
  const endDate = formatDate(ProjectData.recruitmentEndDate);
  return (
    <S.Container>
      <S.DateTag>모집날짜</S.DateTag>
      <S.Period>
        {startDate} ~ {endDate}
      </S.Period>
    </S.Container>
  );
}

export default RecruitmentDate;
