import { useGetAllInquiries } from '../../../hooks/admin/useGetAllInquiries';
import Spinner from '../../user/mypage/Spinner';
import AdminInquiry from './AdminInquiry';
import * as S from './AdminInquiryList.styled';

export default function AdminInquiryList() {
  const { allInquiriesData, isLoading } = useGetAllInquiries();

  if (isLoading) {
    <S.SpinnerWrapper>
      <Spinner />
    </S.SpinnerWrapper>;
  }

  if (!allInquiriesData) return;

  return (
    <S.AdminInquiryListContainer>
      <S.AdminInquiryListWrapper>
        {allInquiriesData.map((list) => (
          <AdminInquiry key={list.id} list={list} />
        ))}
      </S.AdminInquiryListWrapper>
    </S.AdminInquiryListContainer>
  );
}
