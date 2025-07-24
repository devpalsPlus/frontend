import * as S from './InquiresPreview.styled';
import Avatar from '../../../common/avatar/Avatar';
import { ADMIN_ROUTE } from '../../../../constants/routes';
import arrow_right from '../../../../assets/ArrowRight.svg';
import Spinner from '../../../user/mypage/Spinner';
import { useGetInquiriesPreview } from '../../../../hooks/admin/useGetInquiriesPreview';

const InquiresPreview = () => {
  const { allInquiriesPreviewData, isLoading, isFetching } =
    useGetInquiriesPreview();

  if (isLoading || isFetching) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!allInquiriesPreviewData || allInquiriesPreviewData.length === 0) {
    return <S.Container>등록된 문의가 없습니다.</S.Container>;
  }

  return (
    <S.Container>
      {allInquiriesPreviewData.map((inquiry) => (
        <S.Wrapper key={inquiry.id}>
          <S.Content>
            {/* <Link to={`${ADMIN_ROUTE.}`} */}
            <Avatar image={inquiry.user.img} size='40px' />
            <S.Inquiry to={`${ADMIN_ROUTE.inquiries}/${inquiry.id}`}>
              <S.Category>{inquiry.category}</S.Category>
              <S.Title>{inquiry.title}</S.Title>
              <S.StateArea>
                <S.InquiriesDate>{inquiry.createdAt}</S.InquiriesDate>
                <S.Divider>|</S.Divider>
                <S.InquiryState $isCompleted={inquiry.state}>
                  {inquiry.state ? '답변 완료' : '답변 대기 중'}
                </S.InquiryState>
              </S.StateArea>
            </S.Inquiry>
          </S.Content>
          <S.MoveToInquiryArea to={`${ADMIN_ROUTE.inquiries}/${inquiry.id}`}>
            <S.Text>상세 보기</S.Text>
            <S.Arrow src={arrow_right} />
          </S.MoveToInquiryArea>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default InquiresPreview;
