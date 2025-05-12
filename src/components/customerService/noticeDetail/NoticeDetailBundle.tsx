import { useLocation, useParams } from 'react-router-dom';
import { useGetNoticeDetail } from '../../../hooks/useGetNoticeDetail';
import * as S from './NoticeDetailBundle.styled';
import NoticeDetailBottom from './bottom/NoticeDetailBottom';
import NoticeDetailContent from './content/NoticeDetailContent';
import NoticeDetailHeader from './header/NoticeDetailHeader';
import Spinner from '../../mypage/Spinner';
import ListButton from './bottom/button/ListButton';

export default function NoticeDetailBundle() {
  const location = useLocation();
  const { noticeId } = useParams();
  const id = noticeId || String(location.state.id);

  const { noticeDetail: noticeDetailData, isLoading } = useGetNoticeDetail(id);

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!noticeDetailData) {
    return (
      <S.Container>
        <NoticeDetailContent
          id={0}
          title='공지사항이 없습니다.'
          content='목록으로 돌아가세요.'
          createdAt=''
          viewCount={0}
        />
        <ListButton />
      </S.Container>
    );
  }

  const {
    id: detailId,
    title,
    content,
    createdAt,
    viewCount,
    prev,
    next,
  } = noticeDetailData;

  return (
    <S.Container>
      <NoticeDetailHeader />
      <NoticeDetailContent
        id={detailId}
        title={title}
        content={content}
        createdAt={createdAt}
        viewCount={viewCount}
      />
      <NoticeDetailBottom prev={prev} next={next} />
    </S.Container>
  );
}
