import { useSearchParams } from 'react-router-dom';
import { useGetAllInquiries } from '../../../hooks/admin/useGetAllInquiries';
import Spinner from '../../user/mypage/Spinner';
import AdminInquiry from './AdminInquiry';
import * as S from './AdminInquiryList.styled';
import AdminInquiryListLookup from './AdminInquiryListLookup';
import { useEffect, useState } from 'react';

export type SearchParamsType = {
  userId?: string;
  startDate?: string;
  endDate?: string;
};

export default function AdminInquiryList() {
  const [childSearchParams, setChildSearchParams] = useState<SearchParamsType>({
    userId: '',
    startDate: '',
    endDate: '',
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const { allInquiriesData, isLoading } = useGetAllInquiries();

  const handleSearchParamsChange = (newParams: SearchParamsType) => {
    setChildSearchParams((prevParams) => ({
      ...prevParams,
      ...newParams,
    }));
  };

  useEffect(() => {
    const newParams = new URLSearchParams();

    Object.entries(childSearchParams).forEach(([key, value]) => {
      return value ? newParams.set(key, value) : newParams.delete(key);
    });

    setSearchParams(newParams);
  }, [childSearchParams, searchParams, setSearchParams]);

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
      <AdminInquiryListLookup onSearchParamsChange={handleSearchParamsChange} />
      <S.AdminInquiryListWrapper>
        {allInquiriesData.map((list) => (
          <AdminInquiry key={list.id} list={list} />
        ))}
      </S.AdminInquiryListWrapper>
    </S.AdminInquiryListContainer>
  );
}
