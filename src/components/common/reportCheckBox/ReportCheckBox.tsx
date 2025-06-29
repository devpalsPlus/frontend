import * as S from './ReportCheckBox.styled';
import { reasons } from '../../../constants/user/reportConstants';

interface ReportCheckBoxProps {
  isNotExist?: boolean;
  isAdmin?: boolean;
  selectedCheckbox?: string[];
}

const ReportCheckBox = ({
  isNotExist = false,
  isAdmin = false,
  selectedCheckbox,
}: ReportCheckBoxProps) => {
  return (
    <S.Container>
      {reasons.map((reason) => (
        <S.CheckItem key={reason}>
          <S.CheckInput
            type='checkbox'
            name='reason'
            value={reason}
            disabled={isAdmin}
            checked={selectedCheckbox?.includes(reason)}
          />
          <S.CheckContent htmlFor={`reason-${reason}`}>{reason}</S.CheckContent>
        </S.CheckItem>
      ))}

      {isNotExist && (
        <S.ErrorMessage>신고 사유를 하나 이상 선택해주세요.</S.ErrorMessage>
      )}
    </S.Container>
  );
};

export default ReportCheckBox;
