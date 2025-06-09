import { useState } from 'react';
import * as S from './FAQ.styled';
import type { SearchKeyword } from '../../../../models/customerService';
import { useGetFAQ } from '../../../../hooks/user/useGetFAQ';
import { Spinner } from '../../../../components/common/loadingSpinner/LoadingSpinner.styled';
import CustomerServiceHeader from '../../../../components/user/customerService/CustomerServiceHeader';
import FAQItem from '../../../../components/user/customerService/faq/FAQItem';

export default function FAQ() {
  const [keyword, setKeyword] = useState<SearchKeyword>({ keyword: '' });
  const [value, setValue] = useState<string>('');
  const { faqData, isLoading } = useGetFAQ(keyword);

  const handleGetKeyword = (keyword: string) => {
    setKeyword({ keyword });
    setValue(keyword);
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
      <CustomerServiceHeader
        title='FAQ'
        keyword={value}
        onGetKeyword={handleGetKeyword}
      />
      <FAQItem faqData={faqData} />
    </>
  );
}
