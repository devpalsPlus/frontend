import type { MyInquiries } from '../../../models/activityLog';
import * as S from './AdminInquiryDetailContent.styled';

interface AdminInquiryDetailContentProps {
  inquiry: MyInquiries;
}

export default function AdminInquiryDetailContent({
  inquiry,
}: AdminInquiryDetailContentProps) {
  console.log(inquiry);

  return (
    <S.AdminInquiryContentContainer>
      <S.AdminInquiryContentWrapper>
        <S.InquiryHeaderWrapper>
          <S.InquiryTitle>{`[${inquiry.category}] ${inquiry.title}`}</S.InquiryTitle>
          <S.InquiryInfo>{`${inquiry.user.nickname} | ${inquiry.createdAt}`}</S.InquiryInfo>
        </S.InquiryHeaderWrapper>
        <S.InquiryContent>{inquiry.content}</S.InquiryContent>
      </S.AdminInquiryContentWrapper>
    </S.AdminInquiryContentContainer>
  );
}
