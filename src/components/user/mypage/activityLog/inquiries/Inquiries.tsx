import { useGetMyInquiries } from '../../../../../hooks/user/useGetMyInquiries';
import ContentBorder from '../../../../common/contentBorder/ContentBorder';
import NoContent from '../../../../common/noContent/NoContent';
import Spinner from '../../Spinner';
import * as S from './Inquiries.styled';
import Inquiry from './inquiry/Inquiry';

export default function Inquiries() {
  const { myInquiriesData, isLoading } = useGetMyInquiries();

  if (isLoading) {
    return <Spinner />;
  }

  if (!myInquiriesData || myInquiriesData?.length === 0)
    return (
      <S.WrapperNoContent data-type='noContent'>
        <NoContent type='inquiries' />
      </S.WrapperNoContent>
    );

  return (
    <S.container>
      <S.InquiriesContainer>
        <S.InquiriesTableHeadContainer>
          <S.InquiriesTableHeadWrapper>
            <S.InquiriesTableHeaderNo>No</S.InquiriesTableHeaderNo>
            <S.InquiriesTableHeaderCategory>
              구별
            </S.InquiriesTableHeaderCategory>
            <S.InquiriesTableHeaderTitle>제목</S.InquiriesTableHeaderTitle>
            <S.InquiriesTableHeaderState>상태</S.InquiriesTableHeaderState>
          </S.InquiriesTableHeadWrapper>
          <ContentBorder />
        </S.InquiriesTableHeadContainer>
        <S.InquiriesWrapper>
          {myInquiriesData.map((list, index) => (
            <Inquiry
              key={`${index}-${list.title}`}
              list={list}
              no={myInquiriesData.length - index}
            />
          ))}
        </S.InquiriesWrapper>
      </S.InquiriesContainer>
    </S.container>
  );
}
