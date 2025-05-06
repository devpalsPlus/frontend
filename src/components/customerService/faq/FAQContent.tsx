import { ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { FAQ } from '../../../models/customerService';
import * as S from './FAQContent.styled';
import { useState } from 'react';

interface FAQContentProps {
  list: FAQ;
}

export default function FAQContent({ list }: FAQContentProps) {
  const [isFAQContentOpen, setIsFAQContentOpen] = useState<boolean>(false);

  return (
    <S.ListContainer>
      <S.ListWrapper onClick={() => setIsFAQContentOpen((prev) => !prev)}>
        <S.ListTitle>{list.title}</S.ListTitle>
        <S.ListPlusButton type='button' $isOpen={isFAQContentOpen}>
          <PlusIcon />
        </S.ListPlusButton>
      </S.ListWrapper>
      {isFAQContentOpen && (
        <S.ListContentWrapper>
          <S.ListButtonWrapper>
            <ChevronRightIcon />
          </S.ListButtonWrapper>
          <S.ListContent>{list.content}</S.ListContent>
        </S.ListContentWrapper>
      )}
    </S.ListContainer>
  );
}
