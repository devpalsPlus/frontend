import { MY_STATUS } from '../../../constants/authConstants';
import { MyAppliedProjectStatus } from '../../../models/userProject';
import * as S from './MyStatus.styled';

interface StatusProps {
  status: MyAppliedProjectStatus;
}

const MyStatus = ({ status }: StatusProps) => {
  return (
    <S.Container>
      <S.Title>{status.projectTitle}</S.Title>
      <S.Status $isAccepted={status.status === MY_STATUS.ACCEPTED}>
        <span>{status.status}</span>
      </S.Status>
    </S.Container>
  );
};

export default MyStatus;
