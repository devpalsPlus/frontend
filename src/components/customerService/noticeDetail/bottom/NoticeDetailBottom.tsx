import type { OtherNotice } from '../../../../models/customerService';
import ContentBorder from '../../../common/contentBorder/ContentBorder';
import ListButton from './button/ListButton';
import OtherNoticeButton from './button/OtherNoticeButton';
import * as S from './NoticeDetailBottom.styled';

interface NoticeDetailBottomProps {
  prev: OtherNotice | null;
  next: OtherNotice | null;
}

export default function NoticeDetailBottom({
  prev,
  next,
}: NoticeDetailBottomProps) {
  return (
    <S.Container>
      <ContentBorder />
      {prev !== null ? (
        <OtherNoticeButton
          navigation='이전'
          id={prev.id}
          title={prev.title}
          createdAt={prev.createdAt}
        />
      ) : (
        <S.NotOtherNotice>이전 공지사항이 없습니다.</S.NotOtherNotice>
      )}
      <ContentBorder />
      {next !== null ? (
        <OtherNoticeButton
          navigation='다음'
          id={next.id}
          title={next.title}
          createdAt={next.createdAt}
        />
      ) : (
        <S.NotOtherNotice>다음 공지사항이 없습니다.</S.NotOtherNotice>
      )}
      <ListButton />
    </S.Container>
  );
}
