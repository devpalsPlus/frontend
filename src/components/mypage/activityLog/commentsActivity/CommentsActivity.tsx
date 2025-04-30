import { Fragment } from 'react/jsx-runtime';
import { useGetMyComments } from '../../../../hooks/useGetMyComments';
import NoContent from '../../../common/noContent/NoContent';
import Spinner from '../../Spinner';
import CommentActivity from './commentActivity/CommentActivity';
import * as S from './CommentsActivity.styled';

export default function CommentsActivity() {
  const { myCommentsData, isLoading } = useGetMyComments();

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879;' />;
  }

  if (!myCommentsData || myCommentsData.length === 0) {
    return (
      <S.WrapperNoContent>
        <NoContent type='comment' />
      </S.WrapperNoContent>
    );
  }

  return (
    <S.Container>
      <S.CommentsWrapper>
        {myCommentsData.map((list, idx: number) => (
          <Fragment key={list.id}>
            <CommentActivity list={list} />
            {idx !== myCommentsData.length - 1 && (
              <S.CommentBorder></S.CommentBorder>
            )}
          </Fragment>
        ))}
      </S.CommentsWrapper>
    </S.Container>
  );
}
