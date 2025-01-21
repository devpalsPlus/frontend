import { ApplicantInfo } from '../../../models/applicant';
import * as S from './ApplicantItem.styled';

interface ApplicantItemProps {
  selectedApplicant: number;
  applicantData: ApplicantInfo;
  onClick: (userId: number) => void;
}

function ApplicantItem({
  selectedApplicant,
  applicantData,
  onClick,
}: ApplicantItemProps) {
  const isSelected = selectedApplicant === applicantData.userId;
  return (
    <>
      <S.Button
        $isSelected={isSelected}
        onClick={() => onClick(applicantData.userId)}
        passStatus={applicantData.status}
      >
        {applicantData.User.nickname}
      </S.Button>
    </>
  );
}

export default ApplicantItem;
