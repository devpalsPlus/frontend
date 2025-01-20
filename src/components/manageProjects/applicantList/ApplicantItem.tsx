import { ApplicantInfo } from '../../../models/applicant';
import * as S from './ApplicantItem.styled';

interface ApplicantItemProps {
  applicantData: ApplicantInfo;
  onClick: (userId: number) => void;
}

function ApplicantItem({ applicantData, onClick }: ApplicantItemProps) {
  return (
    <>
      <S.Button
        onClick={() => onClick(applicantData.userId)}
        passStatus={applicantData.status}
      >
        {applicantData.User.nickname}
      </S.Button>
    </>
  );
}

export default ApplicantItem;
