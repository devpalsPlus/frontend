import { useGetMyInquires } from '../../../../hooks/useGetMyInquires';
import NoContent from '../../../common/noContent/NoContent';
import Spinner from '../../Spinner';
import * as S from './Inquiries.styled';
import Inquiry from './inquiry/Inquiry';

export default function Inquiries() {
  const { myInquiresData, isLoading } = useGetMyInquires();

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879;' />;
  }

  if (!myInquiresData) return;

  if (myInquiresData.length === 0)
    return (
      <S.WrapperNoContent>
        <NoContent type='inquiries' />
      </S.WrapperNoContent>
    );

  return (
    <S.container>
      <S.InquiriesContainer>
        <S.InquiriesTableHeadWrapper>
          <S.InquiriesTableHeaderNo>No</S.InquiriesTableHeaderNo>
          <S.InquiriesTableHeaderCategory>구별</S.InquiriesTableHeaderCategory>
          <S.InquiriesTableHeaderTitle>제목</S.InquiriesTableHeaderTitle>
          <S.InquiriesTableHeaderState>상태</S.InquiriesTableHeaderState>
        </S.InquiriesTableHeadWrapper>
        <S.InquiriesWrapper>
          {myInquiresData.length > 0 &&
            myInquiresData.map((list, index) => (
              <Inquiry
                key={`${index}-${list.title}`}
                list={list}
                no={myInquiresData.length - index}
              />
            ))}
        </S.InquiriesWrapper>
      </S.InquiriesContainer>
    </S.container>
  );
}
