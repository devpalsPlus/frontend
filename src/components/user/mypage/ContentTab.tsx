import { useEffect, useState } from 'react';
import * as S from './ContentTab.styled';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ScrollWrapper from './ScrollWrapper';
import MovedInquiredLink from '../customerService/MoveInquiredLink';
import useAuthStore from '../../../store/authStore';

interface Filter {
  title: string;
  url: string;
  id?: number;
  linkUrl?: string;
}

interface ContentProps {
  filter: readonly Filter[];
  $justifyContent: string;
}

export default function ContentTab({ filter, $justifyContent }: ContentProps) {
  const { pathname } = useLocation();
  const isAdmin = useAuthStore().userData?.admin;
  const [filterId, setFilterId] = useState<number>();

  useEffect(() => {
    const currentFilter = filter.find((item) =>
      pathname.includes(item.url.split('/').pop() || '')
    );
    if (currentFilter && currentFilter.id !== undefined) {
      setFilterId(currentFilter.id);
    } else {
      setFilterId(filter[0]?.id || 0);
    }
  }, [pathname, filter]);

  function handleChangeId(id: number) {
    setFilterId(id);
  }

  return (
    <S.Container>
      <S.FilterWrapper $justifyContent={$justifyContent}>
        {filter.map((filter) => (
          <Link
            key={filter.title}
            to={filter.url}
            onClick={() => handleChangeId(filter.id as number)}
          >
            <S.WrapperTitle $selected={filter?.id === filterId}>
              <S.FilterTitle>{filter.title}</S.FilterTitle>
            </S.WrapperTitle>
          </Link>
        ))}
      </S.FilterWrapper>
      {pathname.includes('inquiries') ? (
        <>
          <S.WrapperButton $height='10%'>
            {!isAdmin && <MovedInquiredLink />}
          </S.WrapperButton>
          <ScrollWrapper $height='10%'>
            <S.FilterContainer>
              <Outlet context={{ filterId }} />
            </S.FilterContainer>
          </ScrollWrapper>
        </>
      ) : (
        <ScrollWrapper>
          <S.FilterContainer>
            <Outlet context={{ filterId }} />
          </S.FilterContainer>
        </ScrollWrapper>
      )}
    </S.Container>
  );
}
