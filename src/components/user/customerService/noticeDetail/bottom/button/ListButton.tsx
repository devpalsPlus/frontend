import { ROUTES } from '../../../../../../constants/routes';
import ContentBorder from '../../../../../common/contentBorder/ContentBorder';
import * as S from './ListButton.styled';

interface ListButtonProps {
  keyword: string;
}

export default function ListButton({ keyword }: ListButtonProps) {
  const isKeyword = keyword ? `?keyword=${keyword}` : ``;

  return (
    <>
      <ContentBorder />
      <S.ListWrapper>
        <S.ListLink
          to={`${ROUTES.customerService}/${ROUTES.notice}${isKeyword}`}
        >
          <S.ListTitle>목록</S.ListTitle>
        </S.ListLink>
      </S.ListWrapper>
    </>
  );
}
