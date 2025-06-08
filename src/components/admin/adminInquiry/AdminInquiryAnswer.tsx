import { useEffect, useState } from 'react';
import * as S from './AdminInquiryAnswer.styled';
import { useOutletContext } from 'react-router-dom';

interface AdminInquiryDetailContentOutletContext {
  createdAt: string;
  answerData: string;
}

export default function AdminInquiryAnswer() {
  const { createdAt, answerData }: AdminInquiryDetailContentOutletContext =
    useOutletContext();

  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    setAnswer(answerData);
  }, [answerData]);

  return (
    <S.InquiryAnswerContentContainer>
      <S.InquiryAnswerContentWrapper>
        <S.AnswerHeaderWrapper>
          <S.InquiryAnswerInfo>
            {createdAt ? createdAt : ''}
          </S.InquiryAnswerInfo>
          <S.InquiryAnswerButton type='button'>
            <S.AnswerButtonSpan>
              {answer === null ? '작성하기' : '수정하기'}
            </S.AnswerButtonSpan>
          </S.InquiryAnswerButton>
        </S.AnswerHeaderWrapper>
        <S.InquiryAnswerContent>{answer}</S.InquiryAnswerContent>
      </S.InquiryAnswerContentWrapper>
    </S.InquiryAnswerContentContainer>
  );
}
