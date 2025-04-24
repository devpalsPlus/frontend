import * as S from './CommentLayout.styled';
import CommentInput from './commentInput/CommentInput';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import useGetComment from '../../hooks/CommentHooks/useGetComment';
import CommentComponentLayout from './commentComponent/CommentComponentLayout';

interface CommentLayoutProps {
  projectId: number;
  createrId: number;
  loginUserId: number | undefined;
}

const CommentLayout = ({
  projectId,
  createrId,
  loginUserId,
}: CommentLayoutProps) => {
  const { getCommentList, isLoading, isFetching, isError } =
    useGetComment(projectId);

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.error(isError);
  }

  return (
    <S.Container>
      <S.CommentCountsContainer>
        <S.Count>댓글 {getCommentList?.length}개</S.Count>
      </S.CommentCountsContainer>

      <S.CommentInput>
        <CommentInput projectId={projectId} commentId={0} />
      </S.CommentInput>

      <S.CommentContainer>
        <CommentComponentLayout
          getCommentList={getCommentList}
          projectId={projectId}
          createrId={createrId}
          loginUserId={loginUserId}
        />
      </S.CommentContainer>
    </S.Container>
  );
};

export default CommentLayout;
