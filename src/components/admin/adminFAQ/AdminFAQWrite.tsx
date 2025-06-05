import { INQUIRY_MESSAGE } from '../../../constants/user/customerService';
import * as S from './../../admin/adminNotice/AdminNoticeWrite.styled';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';
import Modal from '../../../components/common/modal/Modal';
import type { WriteBody } from '../../../models/customerService';
import Spinner from '../../../components/user/mypage/Spinner';
import { useAdminFAQ } from '../../../hooks/admin/useAdminFAQ';

export default function AdminFAQWrite() {
  const location = useLocation();
  const {
    isOpen: isModalOpen,
    message,
    handleModalOpen,
    handleModalClose,
  } = useModal();
  const pathname = location.state.from || '';
  const id = location.state.id || '';

  const formDefault = () => {
    setForm({
      title: '',
      content: '',
    });
  };

  const { getFAQDetailData, postFAQMutate, putFAQMutate } = useAdminFAQ({
    handleModalOpen,
    formDefault,
    pathname,
    id,
  });
  const [form, setForm] = useState<WriteBody>({
    title: '',
    content: '',
  });
  const { data: FAQDetailData, isLoading } = getFAQDetailData;

  useEffect(() => {
    if (!FAQDetailData) return;
    setForm({ title: FAQDetailData.title, content: FAQDetailData.content });
  }, [FAQDetailData]);

  const handleSubmitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = {
      title: form.title.trim() !== '',
      content: form.content.trim() !== '',
    };

    if (!isValid.title) {
      return handleModalOpen(INQUIRY_MESSAGE.writeTitle);
    }
    if (!isValid.content) {
      return handleModalOpen(INQUIRY_MESSAGE.writeContent);
    }

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const formDataObj: WriteBody = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    };

    if (!id) {
      return postFAQMutate.mutate(formDataObj);
    } else {
      return putFAQMutate.mutate({ id, formDataObj });
    }
  };

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  return (
    <S.AdminNoticeContainer>
      <S.AdminNoticeForm
        onSubmit={handleSubmitInquiry}
        method='post'
        encType='multipart/form-data'
      >
        <S.AdminNoticeWrapper>
          <S.AdminNoticeNav>
            <S.AdminNoticeInputTitle
              name='title'
              type='text'
              placeholder='제목을 입력하세요.'
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </S.AdminNoticeNav>
          <S.AdminNoticeContentWrapper>
            <S.AdminNoticeContent
              as='textarea'
              name='content'
              value={form.content}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, content: e.target.value }))
              }
            ></S.AdminNoticeContent>
          </S.AdminNoticeContentWrapper>
          <S.AdminNoticeSendButtonWrapper>
            <S.AdminNoticeSendButton type='submit'>
              제출
            </S.AdminNoticeSendButton>
          </S.AdminNoticeSendButtonWrapper>
        </S.AdminNoticeWrapper>
      </S.AdminNoticeForm>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.AdminNoticeContainer>
  );
}
