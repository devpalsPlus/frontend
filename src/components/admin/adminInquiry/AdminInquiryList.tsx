import { useSearchParams } from 'react-router-dom';
import { useGetAllInquiries } from '../../../hooks/admin/useGetAllInquiries';
import Spinner from '../../user/mypage/Spinner';
import AdminInquiry from './AdminInquiry';
import * as S from './AdminInquiryList.styled';
import AdminInquiryListLookup from './AdminInquiryListLookup';
import type { AdminInquiryChangeSearchParams } from '../../../models/inquiry';

export type SearchParamsInquiryKeyType = keyof AdminInquiryChangeSearchParams;
export default function AdminInquiryList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId') || '';
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';
  const { allInquiriesData, isLoading } = useGetAllInquiries({
    userId,
    startDate,
    endDate,
  });

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!allInquiriesData) return;

  return (
    <S.AdminInquiryListContainer>
      <AdminInquiryListLookup />
      <S.AdminInquiryListWrapper>
        {allInquiriesData.map((list) => (
          <AdminInquiry key={list.id} list={list} />
        ))}
      </S.AdminInquiryListWrapper>
    </S.AdminInquiryListContainer>
  );
}
