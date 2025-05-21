import { Fragment } from 'react/jsx-runtime';
import Spinner from '../../Spinner';
import CommentActivity from './commentActivity/CommentActivity';
import * as S from './CommentsActivity.styled';
import NoContent from '../../../../common/noContent/NoContent';
import { useGetMyComments } from '../../../../../hooks/user/useGetMyComments';

export default function CommentsActivity() {
  const { myCommentsData, isLoading } = useGetMyComments();

  if (isLoading) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <Spinner size='50px' color='#3e5879' />
      </S.WrapperNoContentAppliedProjects>
    );
  }

  if (!myCommentsData || myCommentsData.length === 0) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <NoContent type='comment' />
      </S.WrapperNoContentAppliedProjects>
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
