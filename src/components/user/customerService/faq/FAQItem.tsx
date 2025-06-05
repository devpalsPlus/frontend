import { useState } from 'react';
import * as S from './FAQItem.styled';
import type { FAQ } from '../../../../models/customerService';
import FAQContent from './faqContent/FAQContent';
import ContentBorder from '../../../common/contentBorder/ContentBorder';
import NoResult from '../../../common/noResult/NoResult';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItemProps {
  faqData: FAQ[];
  $isAdmin?: boolean;
}

export default function FAQItem({ faqData, $isAdmin = false }: FAQItemProps) {
  const [showFAQ, setShowFAQ] = useState<number>(10);

  return (
    <S.Container>
      <S.Wrapper $isAdmin={$isAdmin}>
        {faqData.length > 0 ? (
          faqData
            .filter((_, index) => index < showFAQ)
            .map((list) => (
              <S.ToggleWrapper key={list.id}>
                <FAQContent list={list} isAdmin={$isAdmin} />
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
              <S.ShowMoreSpan>
                더보기
                <ChevronDownIcon />
              </S.ShowMoreSpan>
            </S.ShowMoreFAQ>
            <ContentBorder />
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
