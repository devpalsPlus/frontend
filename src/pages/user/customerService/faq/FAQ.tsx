import { useState } from 'react';
import * as S from './FAQ.styled';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { SearchKeyword } from '../../../../models/customerService';
import { useGetFAQ } from '../../../../hooks/user/useGetFAQ';
import { Spinner } from '../../../../components/common/loadingSpinner/LoadingSpinner.styled';
import CustomerServiceHeader from '../../../../components/user/customerService/CustomerServiceHeader';
import FAQContent from '../../../../components/user/customerService/faq/FAQContent';
import ContentBorder from '../../../../components/common/contentBorder/ContentBorder';
import NoResult from '../../../../components/common/noResult/NoResult';

export default function FAQ() {
  const [keyword, setKeyword] = useState<SearchKeyword>({ keyword: '' });
  const [value, setValue] = useState<string>('');
  const [showFAQ, setShowFAQ] = useState<number>(10);
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
      <S.Container>
        <S.Wrapper>
          {faqData.length > 0 ? (
            faqData
              .filter((_, index) => index < showFAQ)
              .map((list) => (
                <S.ToggleWrapper key={list.id}>
                  <FAQContent list={list} />
                  <ContentBorder />
                </S.ToggleWrapper>
              ))
          ) : (
            <NoResult height='20rem' />
          )}
          {faqData.length > showFAQ && (
            <>
              <S.ShowMoreFAQ
                type='button'
                onClick={() => setShowFAQ((prev) => prev + 10)}
              >
                더보기
                <ChevronDownIcon />
              </S.ShowMoreFAQ>
              <ContentBorder />
            </>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
