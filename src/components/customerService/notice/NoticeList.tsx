import type { NoticeList } from '../../../models/customerService';
import { formatDate } from '../../../util/format';
import * as S from './NoticeList.styled';

interface NoticeProps {
  list: NoticeList;
}

export default function NoticeList({ list }: NoticeProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{list.title}</S.Title>
        <S.Date>{formatDate(list.createdAt)}</S.Date>
      </S.Wrapper>
    </S.Container>
  );
}
