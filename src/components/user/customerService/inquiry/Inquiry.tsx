import { Fragment } from 'react/jsx-runtime';
import {
  INQUIRY_CATEGORY,
  INQUIRY_MESSAGE,
  My_INQUIRIES_MESSAGE,
} from '../../../../constants/user/customerService';
import * as S from './Inquiry.styled';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import type { InquiryFormData } from '../../../../models/inquiry';
import { usePostInquiry } from '../../../../hooks/user/usePostInquiry';
import { useLocation } from 'react-router-dom';
import { useModal } from '../../../../hooks/useModal';
import Modal from '../../../../components/common/modal/Modal';

interface FormStateType {
  category: string;
  title: string;
  content: string;
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
    handleModalOpen,
    location.state.from || ''
  );
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [imageFiles, setImageFiles] = useState<
    { fileValue: string; preview: string; image: File | null }[]
  >([
    { fileValue: My_INQUIRIES_MESSAGE.fileDefault, preview: '', image: null },
  ]);
  const [form, setForm] = useState<FormStateType>({
    category: My_INQUIRIES_MESSAGE.categoryDefault,
    title: '',
    content: '',
  });
  const MAX_FILE_COUNT = 3;

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

    const isValid = {
      category: form.category !== My_INQUIRIES_MESSAGE.categoryDefault,
      title: form.title.trim() !== '',
      content: form.content.trim() !== '',
    };

    imageFiles.forEach((file) => {
      if (
        file.fileValue === My_INQUIRIES_MESSAGE.fileDefault ||
        file.image === null
      ) {
        return;
      } else {
        formData.append('images', file.image);
      }
    });

    if (!isValid.category) {
      return handleModalOpen(INQUIRY_MESSAGE.selectCategory);
    }
    if (!isValid.title) {
      return handleModalOpen(INQUIRY_MESSAGE.writeTitle);
    }
    if (!isValid.content) {
      return handleModalOpen(INQUIRY_MESSAGE.writeContent);
    }

    postInquiry(formData);
    setForm({
      category: My_INQUIRIES_MESSAGE.categoryDefault,
      title: '',
      content: '',
    });
  };

  const handleClickCategoryValue = (category: string) => {
    setForm((prev) => ({ ...prev, category }));
    setIsCategoryOpen((prev) => !prev);
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileValue = e.target.value;
    const image = e.target.files?.[0] ?? null;

    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (image && image.size > MAX_FILE_SIZE) {
      handleModalOpen(INQUIRY_MESSAGE.validationFile);
      e.target.value = '';
      return;
    }

    const actualFileCount = imageFiles.filter(
      (file) => file.fileValue !== My_INQUIRIES_MESSAGE.fileDefault
    ).length;
    if (actualFileCount >= MAX_FILE_COUNT) {
      handleModalOpen(INQUIRY_MESSAGE.maxFileCount);
      e.target.value = '';
      return;
    }

    const preview = image ? URL.createObjectURL(image) : '';
    setImageFiles((prev) => {
      if (
        fileValue.trim() === '' ||
        prev.some((file) => file.fileValue === fileValue) ||
        preview === ''
      )
        return prev;
      if (
        prev.some((file) => file.fileValue === My_INQUIRIES_MESSAGE.fileDefault)
      ) {
        const removeDefault = prev.filter(
          (file) => file.fileValue !== My_INQUIRIES_MESSAGE.fileDefault
        );

        return [...removeDefault, { fileValue, preview, image }];
      }
      return [...prev, { fileValue, preview, image }];
    });

    e.target.value = '';
  };

  const handleDeleteFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteFileValue = e.currentTarget.id;
    setImageFiles((prev) => {
      if (prev.length === 1) {
        return [
          {
            fileValue: My_INQUIRIES_MESSAGE.fileDefault,
            preview: '',
            image: null,
          },
        ];
      }
      return prev.filter((file) => file.fileValue !== deleteFileValue);
    });
  };

  useEffect(() => {
    return () => {
      imageFiles.forEach((file) => {
        if (file.preview && file.preview !== '') {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [imageFiles]);

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
                type='button'
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setIsCategoryOpen((prev) => !prev);
                }}
                $isCategoryOpen={isCategoryOpen}
              >
                {form.category} <ChevronDownIcon />
                <S.CategoryValueInput
                  type='hidden'
                  name='category'
                  value={form.category}
                />
              </S.CategorySelect>
              {isCategoryOpen && (
                <S.CategoryButtonWrapper>
                  {INQUIRY_CATEGORY.map((category) => (
                    <Fragment key={category.title}>
                      <S.CategoryButton
                        type='button'
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
            <S.InquiryFileContainer>
              <S.InquirySelectFile>
                <S.InquiryFileLabel htmlFor='upload'>
                  파일찾기
                </S.InquiryFileLabel>
                <S.InquiryFile
                  name='images'
                  type='file'
                  accept='.jpg, .jpeg, .png'
                  id='upload'
                  onChange={(e) => handleChangeFile(e)}
                />
              </S.InquirySelectFile>
              {imageFiles.map((list) => (
                <S.InquiryFileWrapper key={list.fileValue} id={list.fileValue}>
                  <S.InquiryShowFile>{list.fileValue}</S.InquiryShowFile>
                  {list.preview && <S.FileImg src={list.preview || ''} />}
                  {list.preview && (
                    <S.FileDeleteXButton
                      type='button'
                      id={list.fileValue}
                      onClick={handleDeleteFile}
                    >
                      <XMarkIcon />
                    </S.FileDeleteXButton>
                  )}
                </S.InquiryFileWrapper>
              ))}
            </S.InquiryFileContainer>
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
