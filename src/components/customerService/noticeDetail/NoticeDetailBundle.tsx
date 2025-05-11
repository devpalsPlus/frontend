import { useLocation, useParams } from 'react-router-dom';
import { useGetNoticeDetail } from '../../../hooks/useGetNoticeDetail';
import * as S from './NoticeDetailBundle.styled';
import NoticeDetailBottom from './bottom/NoticeDetailBottom';
import NoticeDetailContent from './content/NoticeDetailContent';
import NoticeDetailHeader from './header/NoticeDetailHeader';
import Spinner from '../../mypage/Spinner';

export default function NoticeDetailBundle() {
  const location = useLocation();
  const { noticeId } = useParams();
  const id = noticeId || String(location.state && location.state.id);

  const { noticeDetailData, isLoading } = useGetNoticeDetail(id);

  if (!noticeDetailData) return;

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  const { title, content, createdAt, viewCount, prev, next } = noticeDetailData;

  return (
    <S.Container>
      <NoticeDetailHeader />
      <NoticeDetailContent
        title={title}
        content={content}
        createdAt={createdAt}
        viewCount={viewCount}
      />
      <NoticeDetailBottom prev={prev} next={next} />
    </S.Container>
  );
}
