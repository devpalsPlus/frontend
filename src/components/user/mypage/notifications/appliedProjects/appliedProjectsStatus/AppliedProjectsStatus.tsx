import { MY_STATUS } from '../../../../../../constants/user/authConstants';
import type { AppliedProject } from '../../../../../../models/userProject';
import * as S from './AppliedProjectsStatus.styled';

interface StatusProps {
  list: AppliedProject;
}

export default function AppliedProjectsStatus({ list }: StatusProps) {
  return (
    <S.Container>
      <S.Title>{list.title}</S.Title>
      <S.Status $isAccepted={list.status === MY_STATUS.ACCEPTED}>
        <S.Span>{list.status}</S.Span>
      </S.Status>
    </S.Container>
  );
}
