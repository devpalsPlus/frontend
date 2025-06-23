import { useEffect, useState } from 'react';
import * as S from './ContentTab.styled';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import ScrollWrapper from './ScrollWrapper';
import MovedInquiredLink from '../customerService/MoveInquiredLink';

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
  const [filterId, setFilterId] = useState<number>();
  const isAdmin = pathname.includes('/admin');

  function handleChangeId(id: number) {
    setFilterId(id);
  }
  useEffect(() => {
    if (
      pathname.includes(ROUTES.notificationsAppliedProjects) ||
      pathname.includes(ROUTES.activityInquiries)
    ) {
      return setFilterId(1);
    } else if (pathname.includes(ROUTES.notificationsCheckedApplicants)) {
      return setFilterId(2);
    } else if (
      pathname.includes(`${ROUTES.myPageNotifications}/${ROUTES.comments}`)
    ) {
      return setFilterId(3);
    } else {
      return setFilterId(0);
    }
  }, [setFilterId, pathname]);

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
              <Outlet />
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
