import { useState } from 'react';
import type { MyInquiries } from '../../../../../models/activityLog';
import * as S from './Inquiry.styled';
import { INQUIRY_MESSAGE } from '../../../../../constants/customerService';

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
            <S.InquiryImgContainer>
              <S.InquiryImgWrapper>
                {list.imageUrls.map((url) => (
                  <S.ImgWrapper
                    key={`${list.category}-${list.title}-${url}`}
                    onClick={() =>
                      setIsImageOpen({
                        isImageOpen: true,
                        url,
                      })
                    }
                  >
                    <S.InquiryImg src={url} />
                  </S.ImgWrapper>
                ))}
              </S.InquiryImgWrapper>
              <S.MessageWrapper>
                {INQUIRY_MESSAGE.blowUpMessage}
              </S.MessageWrapper>
            </S.InquiryImgContainer>
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
                <S.ModalImgMessageWrapper>
                  {INQUIRY_MESSAGE.isImageOpenMessage}
                </S.ModalImgMessageWrapper>
                <S.ModalImg src={isImageOpen.url} />
              </S.ModalImgWrapper>
            </S.ModalImgContainer>
          )}
        </S.InquiryContentWrapper>
      )}
    </S.Container>
  );
}
