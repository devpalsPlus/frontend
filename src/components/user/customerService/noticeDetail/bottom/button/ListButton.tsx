import { useLocation } from 'react-router-dom';
import { ADMIN_ROUTE, ROUTES } from '../../../../../../constants/routes';
import ContentBorder from '../../../../../common/contentBorder/ContentBorder';
import * as S from './ListButton.styled';

interface ListButtonProps {
  keyword: string;
}

export default function ListButton({ keyword }: ListButtonProps) {
  const location = useLocation();
  const includesAdmin = location.pathname.includes('admin') ?? false;
  const isKeyword = keyword ? `?keyword=${keyword}` : ``;

  return (
    <>
      <ContentBorder />
      <S.ListWrapper>
        <S.ListLink
          to={
            includesAdmin
              ? `${ADMIN_ROUTE.admin}/${ADMIN_ROUTE.notice}${isKeyword}`
              : `${ROUTES.customerService}/${ROUTES.notice}${isKeyword}`
          }
        >
          <S.ListTitle>목록</S.ListTitle>
        </S.ListLink>
      </S.ListWrapper>
    </>
  );
}
