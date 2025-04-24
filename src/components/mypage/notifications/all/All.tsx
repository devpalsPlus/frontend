import NoContent from '../../../common/noContent/NoContent';
import * as S from './All.styled';

export default function All() {
  return (
    <S.container>
      <S.WrapperNoContent>
        <NoContent type='notification' />
      </S.WrapperNoContent>
    </S.container>
  );
}
