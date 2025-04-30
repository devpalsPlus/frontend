import { Fragment, useState } from 'react';
import type { MyInquiries } from '../../../../../models/activityLog';
import * as S from './Inquiry.styled';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface InquiryProps {
  list: MyInquiries;
  no: number;
}

interface IsImageOpen {
  isImageOpen: boolean;
  url: string;
}

export default function Inquiry({ list, no }: InquiryProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isImageOpen, setIsImageOpen] = useState<IsImageOpen>({
    isImageOpen: false,
    url: '',
  });

  return (
    <S.Container>
      <S.InquiryTitleWrapper onClick={() => setIsOpen((prev) => !prev)}>
        <S.InquiryNumber>{no}</S.InquiryNumber>
        <S.InquiryCategory>{`[${list.category}]`}</S.InquiryCategory>
        <S.InquiryTitle>{list.title}</S.InquiryTitle>
        <S.InquiryState>{list.state ? '답변완료' : '확인중'}</S.InquiryState>
      </S.InquiryTitleWrapper>
      {isOpen && (
        <S.InquiryContentWrapper>
          <S.InquiryContent>{list.content}</S.InquiryContent>
          {list.imageUrls.length !== 0 && (
            <S.InquiryModalImgWrapper>
              {list.imageUrls.map((url) => (
                <S.InquiryImgWrapper
                  key={`${list.category}-${list.title}-${url}`}
                  onClick={() =>
                    setIsImageOpen((prev) => ({
                      isImageOpen: !prev.isImageOpen,
                      url,
                    }))
                  }
                >
                  <S.InquiryImg src={url} />
                </S.InquiryImgWrapper>
              ))}
            </S.InquiryModalImgWrapper>
          )}
          {isImageOpen.isImageOpen && (
            <S.ModalImgContainer>
              <S.ModalImgWrapper
                onClick={() =>
                  setIsImageOpen({
                    isImageOpen: false,
                    url: '',
                  })
                }
              >
                <S.ModalImgButtonWrapper>
                  이미지를 클릭하면 사라집니다.
                </S.ModalImgButtonWrapper>
                <S.ModalImg src={isImageOpen.url} />
              </S.ModalImgWrapper>
            </S.ModalImgContainer>
          )}
        </S.InquiryContentWrapper>
      )}
    </S.Container>
  );
}
