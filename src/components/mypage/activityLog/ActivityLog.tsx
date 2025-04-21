import { activityFilter } from '../../../constants/myPageFilter';
import * as S from './ActivityLog.styled';

export default function ActivityLog() {
  return (
    <S.Container>
      <S.FilterWrapper>
        {activityFilter.map((filter) => (
          <S.FilterTitle>{filter}</S.FilterTitle>
        ))}
      </S.FilterWrapper>
      <S.FilterContainer></S.FilterContainer>
    </S.Container>
  );
}
