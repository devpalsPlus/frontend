import * as S from './ProjectStat.styled';

interface ProjectStatProps {
  title: string;
  count: number;
}

export default function ProjectStat({ title, count }: ProjectStatProps) {
  return (
    <S.Container>
      <S.Border></S.Border>
      <S.StatWrapper>
        <S.StatNumber>{count}</S.StatNumber>
        <S.StatTitle>{title}</S.StatTitle>
      </S.StatWrapper>
    </S.Container>
  );
}
