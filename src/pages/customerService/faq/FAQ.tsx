import { useState } from 'react';
import { useGetFAQ } from '../../../hooks/useGetFAQ';
import * as S from './FAQ.styled';
import { SearchKeyword } from '../../../models/customerService';
import Spinner from '../../../components/mypage/Spinner';
import CustomerServiceHeader from '../../../components/customerService/CustomerServiceHeader';
import FAQContent from '../../../components/customerService/faq/FAQContent';
import NoResult from '../../../components/common/noResult/NoResult';
import ContentBorder from '../../../components/common/contentBorder/ContentBorder';

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
      <S.Container>
        <S.Wrapper>
          {faqData.length > 0 ? (
            faqData.map((list) => (
              <S.ToggleWrapper key={list.id}>
                <FAQContent list={list} />
                <ContentBorder />
              </S.ToggleWrapper>
            ))
          ) : (
            <NoResult height='20rem' />
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
