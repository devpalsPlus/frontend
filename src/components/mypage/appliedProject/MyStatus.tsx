import { MY_STATUS } from '../../../constants/authConstants';
import type { AppliedProject } from '../../../models/userProject';
import * as S from './MyStatus.styled';

interface StatusProps {
  list: AppliedProject;
}

const MyStatus = ({ list }: StatusProps) => {
  return (
    <S.Container>
      <S.Title>{list.title}</S.Title>
      <S.Status $isAccepted={list.status === MY_STATUS.ACCEPTED}>
        <span>{list.status}</span>
      </S.Status>
    </S.Container>
  );
};

export default MyStatus;
