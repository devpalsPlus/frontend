import { EyeIcon } from '@heroicons/react/24/outline';
import { formatDate } from '../../../../util/format';
import * as S from './NoticeDetailContent.styled';
import logo from '../../../../assets/mainlogo.svg';

interface NoticeDetailContentProps {
  title: string;
  content: string;
  createdAt: string;
}

export default function NoticeDetailContent({
  title,
  content,
  createdAt,
}: NoticeDetailContentProps) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.AdminWrapper>
          <S.AdminImg src={logo} />
          <S.Admin>DevPals</S.Admin>
        </S.AdminWrapper>
        <S.InfoWrapper>
          <S.Date>{formatDate(createdAt)}</S.Date>
          <S.ViewWrapper>
            <S.ViewIcon>
              <EyeIcon />
            </S.ViewIcon>
            <S.ViewCount></S.ViewCount>
          </S.ViewWrapper>
        </S.InfoWrapper>
      </S.TitleWrapper>
      <S.ContentBorder></S.ContentBorder>
      <S.ContentWrapper>
        <S.Content>{content}</S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
}
