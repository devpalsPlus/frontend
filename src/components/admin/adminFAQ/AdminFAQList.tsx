import { useState } from 'react';
import * as S from './AdminFAQList.styled';
import SearchBar from '../../../components/common/admin/searchBar/SearchBar';
import FAQItem from '../../user/customerService/faq/FAQItem';
import { useGetFAQ } from '../../../hooks/user/useGetFAQ';
import Spinner from '../../user/mypage/Spinner';

export default function AdminFAQList() {
  const [keyword, setKeyword] = useState<string>('');
  const { faqData, isLoading } = useGetFAQ({ keyword });

  const handleGetKeyword = (keyword: string) => {
    setKeyword(keyword);
  };

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!faqData) return;

  return (
    <>
      <S.SearchBarFixedWrapper>
        <SearchBar onGetKeyword={handleGetKeyword} value={keyword} />
      </S.SearchBarFixedWrapper>
      <S.FAQItemWrapper>
        <FAQItem faqData={faqData} $isAdmin={true} />
      </S.FAQItemWrapper>
    </>
  );
}
