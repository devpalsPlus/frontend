import { INQUIRY_MESSAGE } from '../../../../constants/user/customerService';
import * as S from './AdminNoticeWrite.styled';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useModal } from '../../../../hooks/useModal';
import Modal from '../../../../components/common/modal/Modal';
import type { WriteBody } from '../../../../models/customerService';
import { useAdminNotice } from '../../../../hooks/admin/useAdminNotice';
import { useGetNoticeDetail } from '../../../../hooks/user/useGetNoticeDetail';
import Spinner from '../../../../components/user/mypage/Spinner';

export default function AdminNoticeWrite() {
  const location = useLocation();
  const {
    isOpen: isModalOpen,
    message,
    handleModalOpen,
    handleModalClose,
  } = useModal();
  const { noticeId } = useParams();
  const id = noticeId ? noticeId : '';
  const { noticeDetail, isLoading } = useGetNoticeDetail(id);
  const pathname = location.state.from || '';

  const formDefault = () => {
    setForm({
      title: '',
      content: '',
    });
  };

  const { postNoticeMutate, putNoticeMutate } = useAdminNotice({
    handleModalOpen,
    formDefault,
    pathname,
  });
  const [form, setForm] = useState<WriteBody>({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (!noticeDetail) return;
    setForm({ title: noticeDetail.title, content: noticeDetail.content });
  }, [noticeDetail]);

  const handleSubmitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const formDataObj: WriteBody = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    };

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

    if (!id) {
      return postNoticeMutate.mutate(formDataObj);
    } else {
      return putNoticeMutate.mutate({ id, formDataObj });
    }
  };

  if (isLoading) {
    return <Spinner />;
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
