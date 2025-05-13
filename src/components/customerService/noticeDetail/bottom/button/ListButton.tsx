import { ROUTES } from '../../../../../constants/routes';
import ContentBorder from '../../../../common/contentBorder/ContentBorder';
import * as S from './ListButton.styled';

export default function ListButton() {
  return (
    <>
      <ContentBorder />
      <S.ListWrapper>
        <S.ListLink to={`${ROUTES.customerService}/${ROUTES.notice}`}>
          <S.ListTitle>목록</S.ListTitle>
        </S.ListLink>
      </S.ListWrapper>
    </>
  );
}
