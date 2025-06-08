import { ADMIN_ROUTE } from '../../../constants/routes';
import type { AdminInquiry } from '../../../models/inquiry';
import ContentBorder from '../../common/contentBorder/ContentBorder';
import * as S from './AdminInquiry.styled';

interface AdminInquiryProps {
  list: AdminInquiry;
}

export default function AdminInquiry({ list }: AdminInquiryProps) {
  return (
    <S.AdminInquiryContainer to={`${ADMIN_ROUTE.detail}/${list.id}`}>
      <S.AdminInquiryWrapper>
        <S.AdminInquiryTitle>{list.title}</S.AdminInquiryTitle>
        <S.AdminInquiryUser>{list.user.nickname}</S.AdminInquiryUser>
        <S.ADminInquiryDate>{list.createdAt}</S.ADminInquiryDate>
        <S.AdminInquiryState $hasAnswer={list.state}>
          {list.state ? '답변완료' : '확인중'}
        </S.AdminInquiryState>
      </S.AdminInquiryWrapper>
      <ContentBorder />
    </S.AdminInquiryContainer>
  );
}
