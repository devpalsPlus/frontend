import { useOutletContext } from 'react-router-dom';
import * as S from './AdminInquiryAnswerWrite.styled';
import React, { useEffect, useRef, useState } from 'react';
import { InquiryAnswerBody } from '../../../models/inquiry';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Modal from '../../common/modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { INQUIRY_MESSAGE } from '../../../constants/user/customerService';
import Spinner from '../../user/mypage/Spinner';

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
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const isLoading =
    postInquiryAnswerMutate.isPending || patchInquiryAnswerMutate.isPending;

  useEffect(() => {
    if (answerData) {
      setAnswer(answerData);
    }
  }, [answerData]);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [answer]);

  if (isLoading) {
    return (
      <S.SpinnerWrapper $isAdmin={true}>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  const handleSubmitAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer.trim() === '') {
      return handleModalOpen(INQUIRY_MESSAGE.writeContent);
    }

    if (isWrite) {
      postInquiryAnswerMutate.mutate({ id, answer: answer });
    } else {
      patchInquiryAnswerMutate.mutate({ id, answer: answer });
    }
  };

  const handleChangeAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (inputRef && inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }

    const answerValue = e.target.value;

    setAnswer(answerValue);
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
          ref={inputRef}
          onChange={handleChangeAnswer}
        />
      </S.InquiryAnswerWriteWrapper>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.InquiryAnswerContentContainer>
  );
}
