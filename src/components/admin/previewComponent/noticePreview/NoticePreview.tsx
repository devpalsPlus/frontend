import * as S from './NoticePreview.styled';
import line from '../../../../assets/line.svg';
import { Spinner } from '../../../common/loadingSpinner/LoadingSpinner.styled';
import { useGetNoticePreview } from '../../../../hooks/admin/useGetAllNoticePreview';

const NoticePreview = () => {
  const { noticeData, isLoading, isFetching } = useGetNoticePreview();

  if (isLoading || isFetching) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!noticeData) {
    return <S.Container>공지사항이 없습니다.</S.Container>;
  }

  return (
    <S.Container>
      {noticeData.map((notice) => (
        <S.Wrapper key={notice.id}>
          <S.Dot src={line} />
          <S.NoticeTitle>{notice.title}</S.NoticeTitle>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default NoticePreview;
