import { Fragment } from 'react/jsx-runtime';
import { useGetFAQ } from '../../../hooks/useGetFAQ';
import CustomerServiceHeader from '../../../pages/customerService/CustomerServiceHeader';
import Spinner from '../../mypage/Spinner';
import * as S from './FAQ.styled';
import FAQContent from './FAQContent';

export default function FAQ() {
  const { faqData, isLoading } = useGetFAQ();

  if (!faqData || faqData.length === 0) return;

  if (isLoading)
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );

  return (
    <>
      <CustomerServiceHeader title='FAQ' />
      <S.Container>
        <S.Wrapper>
          {faqData.map((list) => (
            <Fragment key={list.id}>
              <FAQContent list={list} />
              <S.ContentBorder></S.ContentBorder>
            </Fragment>
          ))}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
