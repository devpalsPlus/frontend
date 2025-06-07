import * as S from './NoticePreview.styled';
import { useGetNotice } from '../../../../hooks/user/useGetNotice';
import line from '../../../../assets/line.svg';
import { Spinner } from '../../../common/loadingSpinner/LoadingSpinner.styled';

const NoticePreview = () => {
  const { noticeData, isLoading, isFetching } = useGetNotice({
    keyword: '',
    page: 1,
  });

  if (isLoading || isFetching) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!noticeData?.notices || noticeData.notices.length === 0) {
    return <S.Container>공지사힝이 없습니다.</S.Container>;
  }

  return (
    <S.Container>
      {noticeData.notices.map((notice) => (
        <S.Wrapper key={notice.id}>
          <S.Dot src={line} />
          <S.NoticeTitle>{notice.title}</S.NoticeTitle>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default NoticePreview;
