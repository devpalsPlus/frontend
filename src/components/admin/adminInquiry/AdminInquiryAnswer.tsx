import { useEffect, useState } from 'react';
import * as S from './AdminInquiryAnswer.styled';
import { Link, useOutletContext } from 'react-router-dom';
import { ADMIN_ROUTE } from '../../../constants/routes';

interface AdminInquiryDetailContentOutletContext {
  createdAt: string;
  answerData: string;
}

type LinkType = '작성하기' | '수정하기';

export default function AdminInquiryAnswer() {
  const { createdAt, answerData }: AdminInquiryDetailContentOutletContext =
    useOutletContext();

  const [answer, setAnswer] = useState<string>('');
  const selectButton: LinkType = answerData === null ? '작성하기' : '수정하기';

  useEffect(() => {
    if (answerData === null) {
      return setAnswer('');
    } else {
      return setAnswer(answerData);
    }
  }, [answerData]);

  return (
    <S.InquiryAnswerContentContainer>
      <S.InquiryAnswerContentWrapper>
        <S.AnswerHeaderWrapper>
          <S.InquiryAnswerInfo>
            {createdAt ? createdAt : ''}
          </S.InquiryAnswerInfo>
          <S.InquiryAnswerButton
            as={Link}
            to={
              selectButton === '작성하기'
                ? ADMIN_ROUTE.write
                : ADMIN_ROUTE.modification
            }
          >
            <S.AnswerButtonSpan>{selectButton}</S.AnswerButtonSpan>
          </S.InquiryAnswerButton>
        </S.AnswerHeaderWrapper>
        <S.InquiryAnswerContent>{answer}</S.InquiryAnswerContent>
      </S.InquiryAnswerContentWrapper>
    </S.InquiryAnswerContentContainer>
  );
}
