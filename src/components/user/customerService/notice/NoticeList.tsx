import type { NoticeList as TNoticeList } from '../../../models/customerService';
import { formatDate } from '../../../util/format';
import * as S from './NoticeList.styled';

interface NoticeProps {
  notice: TNoticeList;
}

export default function NoticeList({ notice }: NoticeProps) {
  return (
    <S.Container>
      <S.Wrapper type='button' aria-label='공지사항 상세보기'>
        <S.Title>{notice.title}</S.Title>
        <S.NoticeDate>{formatDate(notice.createdAt)}</S.NoticeDate>
      </S.Wrapper>
    </S.Container>
  );
}
