import { ADMIN_ROUTE } from '../../../constants/routes';
import type { AdminInquiry as TAdminInquiry } from '../../../models/inquiry';
import ContentBorder from '../../common/contentBorder/ContentBorder';
import * as S from './AdminInquiry.styled';

interface AdminInquiryProps {
  list: TAdminInquiry;
}

export default function AdminInquiry({ list }: AdminInquiryProps) {
  return (
    <S.AdminInquiryContainer to={`${ADMIN_ROUTE.detail}/${list.id}`}>
      <S.AdminInquiryWrapper>
        <S.AdminInquiryCategory>[{list.category}]</S.AdminInquiryCategory>
        <S.AdminInquiryTitle>{list.title}</S.AdminInquiryTitle>
        <S.AdminInquiryUser>{list.user.nickname}</S.AdminInquiryUser>
        <S.AdminInquiryDate>{list.createdAt}</S.AdminInquiryDate>
        <S.AdminInquiryState $hasAnswer={list.state}>
          {list.state ? '답변완료' : '확인중'}
        </S.AdminInquiryState>
      </S.AdminInquiryWrapper>
      <ContentBorder />
    </S.AdminInquiryContainer>
  );
}
