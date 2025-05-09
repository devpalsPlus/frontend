import { ROUTES } from '../../../../constants/routes';
import type { OtherNotice } from '../../../../models/customerService';
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
      <S.ContentBorder></S.ContentBorder>
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
      <S.ContentBorder></S.ContentBorder>
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
      <S.ContentBorder></S.ContentBorder>
      <S.ListWrapper>
        <S.ListLink to={`${ROUTES.customerService}/${ROUTES.notice}`}>
          <S.ListTitle>목록</S.ListTitle>
        </S.ListLink>
      </S.ListWrapper>
    </S.Container>
  );
}
