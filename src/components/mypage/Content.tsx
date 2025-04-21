import * as S from './Content.styled';

interface ContentProps {
  filter: string[];
  $justifyContent: string;
}

export default function Content({ filter, $justifyContent }: ContentProps) {
  return (
    <S.Container>
      <S.FilterWrapper $justifyContent={$justifyContent}>
        {filter.map((filter) => (
          <S.FilterTitle>{filter}</S.FilterTitle>
        ))}
      </S.FilterWrapper>
      <S.FilterContainer></S.FilterContainer>
    </S.Container>
  );
}
