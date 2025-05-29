import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import * as S from './MoveInquiredLink.styled';

export default function MovedInquiredLink() {
  const location = useLocation();

  return (
    <S.MoveInquiredLink to={ROUTES.inquiry} state={{ from: location.pathname }}>
      문의하기
    </S.MoveInquiredLink>
  );
}
