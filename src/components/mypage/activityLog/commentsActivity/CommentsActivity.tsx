import NoContent from '../../../common/noContent/NoContent';
import * as S from './CommentsActivity.styled';

export default function CommentsActivity() {
  return (
    <S.container>
      <S.WrapperNoContent>
        <NoContent type='comment' />
      </S.WrapperNoContent>
    </S.container>
  );
}
