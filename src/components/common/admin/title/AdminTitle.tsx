import * as S from './AdminTitle.styled';

interface AdminTitleProps {
  title: string;
}

export default function AdminTitle({ title }: AdminTitleProps) {
  return (
    <S.TitleContainer>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
    </S.TitleContainer>
  );
}
