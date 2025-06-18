import { useState } from 'react';
import type { MyInquiries } from '../../../models/activityLog';
import * as S from './AdminInquiryDetailContent.styled';
import { My_INQUIRIES_MESSAGE } from '../../../constants/user/customerService';

interface AdminInquiryDetailContentProps {
  inquiry: MyInquiries;
}

export default function AdminInquiryDetailContent({
  inquiry,
}: AdminInquiryDetailContentProps) {
  const [imageOpen, setImageOpen] = useState<{
    isImgOpen: boolean;
    url: string;
  }>({ isImgOpen: false, url: '' });

  return (
    <S.AdminInquiryContentContainer>
      <S.AdminInquiryContentWrapper>
        <S.InquiryHeaderWrapper>
          <S.InquiryTitle>{`[${inquiry.category}] ${inquiry.title}`}</S.InquiryTitle>
          <S.InquiryInfo>{`${inquiry.user.nickname} | ${inquiry.createdAt}`}</S.InquiryInfo>
        </S.InquiryHeaderWrapper>
        <S.InquiryContent>{inquiry.content}</S.InquiryContent>
        {inquiry.imageUrls.map((url) => (
          <S.InquiryFileImgBlowUpButton
            key={url}
            onClick={() =>
              setImageOpen({
                isImgOpen: true,
                url,
              })
            }
          >
            <S.InquiryFileImg src={url} alt={url} />
          </S.InquiryFileImgBlowUpButton>
        ))}
        {inquiry.imageUrls.length > 0 && (
          <S.MessageWrapper>
            {My_INQUIRIES_MESSAGE.blowUpMessage}
          </S.MessageWrapper>
        )}
      </S.AdminInquiryContentWrapper>
      {imageOpen.isImgOpen && (
        <S.AdminInquiryModalImgContainer>
          <S.AdminInquiryModalImgWrapper
            onClick={() =>
              setImageOpen({
                isImgOpen: false,
                url: '',
              })
            }
          >
            <S.AdminInquiryModalImgMessageWrapper>
              {My_INQUIRIES_MESSAGE.isImageOpenMessage}
            </S.AdminInquiryModalImgMessageWrapper>
            <S.AdminInquiryModalImg src={imageOpen.url} />
          </S.AdminInquiryModalImgWrapper>
        </S.AdminInquiryModalImgContainer>
      )}
    </S.AdminInquiryContentContainer>
  );
}
