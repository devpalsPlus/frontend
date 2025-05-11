import { EyeIcon } from '@heroicons/react/24/outline';
import { formatDate } from '../../../../util/format';
import * as S from './NoticeDetailContent.styled';
import logo from '../../../../assets/mainlogo.svg';

interface NoticeDetailContentProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  viewCount: number;
}

export default function NoticeDetailContent({
  id,
  title,
  content,
  createdAt,
  viewCount,
}: NoticeDetailContentProps) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.AdminWrapper>
          <S.AdminImg src={logo} />
          <S.Admin>DevPals</S.Admin>
        </S.AdminWrapper>
        {id && (
          <S.InfoWrapper>
            <S.NoticeContentDate>{formatDate(createdAt)}</S.NoticeContentDate>
            <S.ViewWrapper>
              <S.ViewIcon>
                <EyeIcon />
              </S.ViewIcon>
              <S.ViewCount>{viewCount}</S.ViewCount>
            </S.ViewWrapper>
          </S.InfoWrapper>
        )}
      </S.TitleWrapper>
      <S.ContentBorder></S.ContentBorder>
      <S.ContentWrapper>
        <S.Content>{content}</S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
}
