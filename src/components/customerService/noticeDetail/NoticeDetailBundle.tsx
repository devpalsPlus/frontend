import { useLocation } from 'react-router-dom';
import { useGetNoticeDetail } from '../../../hooks/useGetNoticeDetail';
import * as S from './NoticeDetailBundle.styled';
import NoticeDetailBottom from './bottom/NoticeDetailBottom';
import NoticeDetailContent from './content/NoticeDetailContent';
import NoticeDetailHeader from './header/NoticeDetailHeader';
import Spinner from '../../mypage/Spinner';

export default function NoticeDetailBundle() {
  const location = useLocation();
  const { id } = location.state;

  const { noticeDetailData, isLoading } = useGetNoticeDetail(String(id));

  if (!noticeDetailData) return;

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  const { title, content, createdAt, prev, next } = noticeDetailData;

  return (
    <S.Container>
      <NoticeDetailHeader />
      <NoticeDetailContent
        title={title}
        content={content}
        createdAt={createdAt}
      />
      <NoticeDetailBottom prev={prev} next={next} />
    </S.Container>
  );
}
