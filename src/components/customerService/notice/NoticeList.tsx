import type { NoticeList as TNoticeList } from '../../../models/customerService';
import { formatDate } from '../../../util/format';
import * as S from './NoticeList.styled';

interface NoticeProps {
  list: TNoticeList;
}

export default function NoticeList({ list }: NoticeProps) {
  return (
    <S.Container>
      <S.Wrapper type='button' aria-label='공지사항 상세보기'>
        <S.Title>{list.title}</S.Title>
        <S.NoticeDate>{formatDate(list.createdAt)}</S.NoticeDate>
      </S.Wrapper>
    </S.Container>
  );
}
