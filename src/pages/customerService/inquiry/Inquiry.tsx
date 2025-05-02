import { Fragment } from 'react/jsx-runtime';
import {
  INQUIRY_CATEGORY,
  My_INQUIRIES_MESSAGE,
} from '../../../constants/customerService';
import * as S from './Inquiry.styled';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import type { InquiryFormData } from '../../../models/inquiry';
import { usePostInquiry } from '../../../hooks/usePostInquiry';
import { useLocation } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';
import Modal from '../../../components/common/modal/Modal';

interface FormStateType {
  category: string;
  title: string;
  content: string;
  fileValue: string;
  fileImage: string | null;
}

export default function Inquiry() {
  const location = useLocation();

  const {
    isOpen: isModalOpen,
    message,
    handleModalOpen,
    handleModalClose,
  } = useModal();
  const { mutate: postInquiry } = usePostInquiry(
    location.state.from,
    handleModalOpen
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [form, setForm] = useState<FormStateType>({
    category: My_INQUIRIES_MESSAGE.categoryDefault,
    title: '',
    content: '',
    fileValue: My_INQUIRIES_MESSAGE.fileDefault,
    fileImage: null,
  });

  const handleSubmitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const formDataObj: InquiryFormData = {
      category: formData.get('category') as string,
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    };

    const data = new Blob([JSON.stringify(formDataObj)], {
      type: 'application/json',
    });

    formData.append('inquiryDto', data);

    // 모달처리하기
    let isValid = true;

    Array.from(formData.entries()).forEach(([key, value]) => {
      if (key === 'category' && value === My_INQUIRIES_MESSAGE.categoryDefault)
        return (isValid = false);
      if (key === 'title' && value === '') return (isValid = false);
      if (key === 'content' && value === '') return (isValid = false);
    });

    if (isValid) {
      postInquiry(formData);
      setForm({
        category: My_INQUIRIES_MESSAGE.categoryDefault,
        title: '',
        content: '',
        fileValue: My_INQUIRIES_MESSAGE.fileDefault,
        fileImage: null,
      });
    }
  };

  const handleClickCategoryValue = (category: string) => {
    setForm((prev) => ({ ...prev, category }));
    setIsOpen((prev) => !prev);
  };
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileValue = e.target.value;
    const image = e.target.files?.[0];

    // 파일 크기 제한 (예: 5MB)
    // 모달처리
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (image && image.size > MAX_FILE_SIZE) {
      alert('파일 크기는 5MB 이하만 가능합니다.');
      e.target.value = '';
      return;
    }

    const fileImage = image ? URL.createObjectURL(image) : null;
    setForm((prev) => ({ ...prev, fileValue, fileImage }));
  };

  useEffect(() => {
    return () => {
      if (form.fileImage) {
        URL.revokeObjectURL(form.fileImage);
      }
    };
  }, [form.fileImage]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>DevPals 문의하기</S.HeaderTitle>
      </S.Header>
      <S.InquiryForm
        onSubmit={handleSubmitInquiry}
        method='post'
        encType='multipart/form-data'
      >
        <S.InquiryWrapper>
          <S.Nav>
            <S.CategoryWrapper>
              <S.CategorySelect
                onClick={() => setIsOpen((prev) => !prev)}
                $isOpen={isOpen}
              >
                {form.category} <ChevronDownIcon />
                <S.CategoryValueInput
                  type='hidden'
                  name='category'
                  value={form.category}
                />
              </S.CategorySelect>
              {isOpen && (
                <S.CategoryButtonWrapper>
                  {INQUIRY_CATEGORY.map((category) => (
                    <Fragment key={category.title}>
                      <S.CategoryButton
                        onClick={() => handleClickCategoryValue(category.title)}
                      >
                        {category.title}
                      </S.CategoryButton>
                    </Fragment>
                  ))}
                </S.CategoryButtonWrapper>
              )}
            </S.CategoryWrapper>
            <S.InputInquiryTitle
              name='title'
              type='text'
              placeholder='제목을 입력하세요.'
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </S.Nav>
          <S.ContentWrapper>
            <S.Content
              as='textarea'
              name='content'
              value={form.content}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, content: e.target.value }))
              }
            ></S.Content>
            <S.InquiryFileWrapper>
              <S.InquiryFileLabel htmlFor='upload'>파일찾기</S.InquiryFileLabel>
              <S.InquiryShowFile>{form.fileValue}</S.InquiryShowFile>
              <S.InquiryFile
                name='images'
                type='file'
                accept='.jpg, .jpeg, .png'
                id='upload'
                onChange={(e) => handleChangeFile(e)}
              />
              {form.fileImage && <S.FileImg src={form.fileImage || ''} />}
            </S.InquiryFileWrapper>
          </S.ContentWrapper>
          <S.SendButtonWrapper>
            <S.SendButton type='submit'>제출</S.SendButton>
          </S.SendButtonWrapper>
        </S.InquiryWrapper>
      </S.InquiryForm>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
}
