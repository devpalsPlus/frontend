import { notificationFilter } from '../../../constants/myPageFilter';
import * as S from './Notifications.styled';

export default function Notifications() {
  return (
    <S.Container>
      <S.FilterWrapper>
        {notificationFilter.map((filter) => (
          <S.FilterTitle>{filter}</S.FilterTitle>
        ))}
      </S.FilterWrapper>
      <S.FilterContainer></S.FilterContainer>
    </S.Container>
  );
}
