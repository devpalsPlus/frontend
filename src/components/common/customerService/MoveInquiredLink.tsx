import { ROUTES } from '../../../constants/routes';
import * as S from './MoveInquiredLink.styled';

export default function MovedInquiredLink() {
  return <S.MoveInquiredLink to={ROUTES.inquiry}>문의하기</S.MoveInquiredLink>;
}
