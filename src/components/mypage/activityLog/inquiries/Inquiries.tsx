import { useGetMyInquires } from '../../../../hooks/useGetMyInquires';
import NoContent from '../../../common/noContent/NoContent';
import Spinner from '../../Spinner';
import * as S from './Inquiries.styled';
import Inquiry from './inquiry/Inquiry';

export default function Inquiries() {
  const { myCommentsData, isLoading } = useGetMyInquires();

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879;' />;
  }

  if (!myCommentsData) return;

  if (myCommentsData.length === 0)
    return (
      <S.WrapperNoContent>
        <NoContent type='comment' />
      </S.WrapperNoContent>
    );

  myCommentsData.map(console.log);

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
          {myCommentsData.length > 0 &&
            myCommentsData.map((list, index) => (
              <Inquiry
                key={list.title}
                list={list}
                no={myCommentsData.length - index}
              />
            ))}
        </S.InquiriesWrapper>
      </S.InquiriesContainer>
    </S.container>
  );
}
