import { Fragment } from 'react/jsx-runtime';
import * as S from './ContentTab.styled';
import { Link, Outlet } from 'react-router-dom';

interface Filter {
  title: string;
  url: string;
}

interface ContentProps {
  filter: readonly Filter[];
  $justifyContent: string;
}

export default function ContentTab({ filter, $justifyContent }: ContentProps) {
  return (
    <S.Container>
      <S.FilterWrapper $justifyContent={$justifyContent}>
        {filter.map((filter) => (
          <Fragment key={filter.title}>
            <S.FilterTitle>
              <Link to={filter.url}>{filter.title}</Link>
            </S.FilterTitle>
          </Fragment>
        ))}
      </S.FilterWrapper>
      <S.ScrollWrapper>
        <S.FilterContainer>
          <Outlet />
        </S.FilterContainer>
      </S.ScrollWrapper>
    </S.Container>
  );
}
