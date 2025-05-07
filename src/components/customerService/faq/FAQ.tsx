import { Fragment } from 'react/jsx-runtime';
import { useGetFAQ } from '../../../hooks/useGetFAQ';
import CustomerServiceHeader from '../../../pages/customerService/CustomerServiceHeader';
import Spinner from '../../mypage/Spinner';
import * as S from './FAQ.styled';
import FAQContent from './FAQContent';

export default function FAQ() {
  const { faqData, isLoading } = useGetFAQ();

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!faqData || faqData.length === 0) return;

  return (
    <>
      <CustomerServiceHeader title='FAQ' />
      <S.Container>
        <S.Wrapper>
          {faqData.map((list) => (
            <S.ToggleWrapper key={list.id}>
              <FAQContent list={list} />
              <S.ContentBorder></S.ContentBorder>
            </S.ToggleWrapper>
          ))}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
