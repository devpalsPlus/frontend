import { Fragment } from 'react/jsx-runtime';
import Spinner from '../../Spinner';
import CommentActivity from './commentActivity/CommentActivity';
import * as S from './CommentsActivity.styled';
import NoContent from '../../../../common/noContent/NoContent';
import useGetUserActivity from '../../../../../hooks/admin/useGetAllUserActivity';
import { useParams } from 'react-router-dom';
import { MyComments } from '../../../../../models/activityLog';
import { UserComment } from '../../../../../models/admin/userDetail/userActivity';

export default function CommentsActivity() {
  const { userId } = useParams();

  const { userActivityData, isLoading } = useGetUserActivity(
    Number(userId),
    'comments'
  );

  if (isLoading) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <Spinner />
      </S.WrapperNoContentAppliedProjects>
    );
  }

  if (
    !userActivityData ||
    !Array.isArray(userActivityData) ||
    userActivityData.length === 0
  ) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <NoContent type='comment' />
      </S.WrapperNoContentAppliedProjects>
    );
  }

  const commentsData = userActivityData as MyComments[] | UserComment[];

  return (
    <S.Container>
      <S.CommentsWrapper>
        {commentsData.map((list: MyComments | UserComment, idx: number) => (
          <Fragment key={list.id}>
            <CommentActivity list={list} />
            {idx !== commentsData.length - 1 && (
              <S.CommentBorder></S.CommentBorder>
            )}
          </Fragment>
        ))}
      </S.CommentsWrapper>
    </S.Container>
  );
}
