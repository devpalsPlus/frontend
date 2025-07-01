import { useSearchParams } from 'react-router-dom';
import { ADMIN_ROUTE } from '../../../constants/routes';
import type { AdminInquiry as TAdminInquiry } from '../../../models/inquiry';
import ContentBorder from '../../common/contentBorder/ContentBorder';
import * as S from './AdminInquiry.styled';

interface AdminInquiryProps {
  list: TAdminInquiry;
}

export default function AdminInquiry({ list }: AdminInquiryProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickLookupUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const id = String(list.user.id);
    const userId = id || '';
    const nickname = list.user.nickname;

    const newParams = new URLSearchParams(searchParams);
    newParams.set('userId', userId);
    newParams.set('nickname', nickname);

    setSearchParams(newParams);
  };

  return (
    <S.AdminInquiryContainer to={`${ADMIN_ROUTE.detail}/${list.id}`}>
      <S.AdminInquiryWrapper>
        <S.AdminInquiryCategory>[{list.category}]</S.AdminInquiryCategory>
        <S.AdminInquiryTitle>{list.title}</S.AdminInquiryTitle>
        <S.AdminInquiryUserWrapper>
          <S.AdminInquiryUser onClick={handleClickLookupUser}>
            {list.user.nickname}
          </S.AdminInquiryUser>
        </S.AdminInquiryUserWrapper>
        <S.AdminInquiryDate>{list.createdAt}</S.AdminInquiryDate>
        <S.AdminInquiryState $hasAnswer={list.state}>
          {list.state ? '답변완료' : '확인중'}
        </S.AdminInquiryState>
      </S.AdminInquiryWrapper>
      <ContentBorder />
    </S.AdminInquiryContainer>
  );
}
