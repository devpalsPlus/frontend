import { Fragment } from 'react/jsx-runtime';
import {
  EMPTY_IMAGE,
  INQUIRY_CATEGORY,
} from '../../../../constants/customerService';
import * as S from './Inquiry.styled';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function Inquiry() {
  const [categoryValue, setCategoryValue] = useState<string>('카테고리');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fileValue, setFileValue] = useState<string>('선택된 파일이 없습니다.');
  const [fileImage, setFileImage] = useState<string>(EMPTY_IMAGE);

  const handleSubmitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  const handleClickCategoryValue = (value: string) => {
    setCategoryValue(value);
    setIsOpen((prev) => !prev);
  };
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const file = e.target.files?.[0];
    setFileValue(value);
    setFileImage(file ? URL.createObjectURL(file) : EMPTY_IMAGE);
  };

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
                {categoryValue} <ChevronDownIcon />
                <S.CategoryValueInput
                  type='hidden'
                  name='category'
                  value={categoryValue}
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
            />
          </S.Nav>
          <S.ContentWrapper>
            <S.Content as='textarea' name='content'></S.Content>
            <S.InquiryFileWrapper>
              <S.InquiryFileLabel htmlFor='upload'>파일찾기</S.InquiryFileLabel>
              <S.InquiryShowFile>{fileValue}</S.InquiryShowFile>
              <S.InquiryFile
                name='image'
                type='file'
                accept='.jpg, .jpeg, .png'
                id='upload'
                onChange={(e) => handleChangeFile(e)}
              />
              <S.FileImg src={fileImage} />
            </S.InquiryFileWrapper>
          </S.ContentWrapper>
          <S.SendButtonWrapper>
            <S.SendButton type='submit'>제출</S.SendButton>
          </S.SendButtonWrapper>
        </S.InquiryWrapper>
      </S.InquiryForm>
    </S.Container>
  );
}
