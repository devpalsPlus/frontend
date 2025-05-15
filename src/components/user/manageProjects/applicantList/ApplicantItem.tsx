import { useEffect, useRef } from 'react';
import { ApplicantInfo } from '../../../../models/applicant';
import * as S from './ApplicantItem.styled';

interface ApplicantItemProps {
  selectedApplicant?: number;
  applicantData: ApplicantInfo;
  onClick: (userId: number) => void;
}

function ApplicantItem({
  selectedApplicant,
  applicantData,
  onClick,
}: ApplicantItemProps) {
  const isSelected = selectedApplicant === applicantData.userId;
  const itemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isSelected && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [isSelected]);

  return (
    <>
      <S.Button
        ref={itemRef}
        $isSelected={isSelected}
        onClick={() => onClick(applicantData.userId)}
        $passStatus={applicantData.status}
      >
        {applicantData.user.nickname}
      </S.Button>
    </>
  );
}

export default ApplicantItem;
