import * as S from './ReportCheckBox.styled';
import { REASON_LIST } from '../../../constants/user/reportConstants';

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
      {REASON_LIST.map((reason, index) => (
        <S.CheckItem key={index}>
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
