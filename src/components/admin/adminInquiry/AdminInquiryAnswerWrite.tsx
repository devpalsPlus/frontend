import { useOutletContext } from 'react-router-dom';
import * as S from './AdminInquiryAnswerWrite.styled';
import React, { useEffect, useRef, useState } from 'react';
import { InquiryAnswerBody } from '../../../models/inquiry';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface AdminInquiryAnswerWriteProps {
  answerData: string;
  isWrite: boolean;
  id: string;
  postInquiryAnswerMutate: UseMutationResult<
    void,
    AxiosError,
    InquiryAnswerBody
  >;
  patchInquiryAnswerMutate: UseMutationResult<
    void,
    AxiosError,
    InquiryAnswerBody
  >;
}

export default function AdminInquiryAnswerWrite() {
  const {
    answerData,
    isWrite,
    id,
    postInquiryAnswerMutate,
    patchInquiryAnswerMutate,
  } = useOutletContext<AdminInquiryAnswerWriteProps>();
  const [answer, setAnswer] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (answerData) {
      setAnswer(answerData);
    }
  }, [answerData]);

  const handleSubmitAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isWrite) {
      postInquiryAnswerMutate.mutate({ id, answer: answer });
    } else {
      patchInquiryAnswerMutate.mutate({ id, answer: answer });
    }
  };

  const handleChangeAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const answerValue = e.target.value;
    setAnswer(answerValue);

    if (inputRef && inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  return (
    <S.InquiryAnswerContentContainer>
      <S.InquiryAnswerWriteWrapper as='form' onSubmit={handleSubmitAnswer}>
        <S.InquiryAnswerWriteHeaderWrapper>
          <S.InquiryAnswerWriteButton type='submit'>
            <S.InquiryAnswerWriteButtonSpan>
              답변하기
            </S.InquiryAnswerWriteButtonSpan>
          </S.InquiryAnswerWriteButton>
          <S.InquiryAnswerWriteInfo></S.InquiryAnswerWriteInfo>
        </S.InquiryAnswerWriteHeaderWrapper>
        <S.InquiryAnswerWrite
          as='textarea'
          value={answer}
          onChange={handleChangeAnswer}
        ></S.InquiryAnswerWrite>
      </S.InquiryAnswerWriteWrapper>
    </S.InquiryAnswerContentContainer>
  );
}
