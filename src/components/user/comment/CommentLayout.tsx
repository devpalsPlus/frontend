import * as S from './CommentLayout.styled';
import CommentInput from './commentInput/CommentInput';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import useGetComment from '../../../hooks/user/CommentHooks/useGetComment';
import CommentComponentLayout from './commentComponent/CommentComponentLayout';
import Avatar from '../../common/avatar/Avatar';
import { useMyProfileInfo } from '../../../hooks/user/useMyInfo';
import { formatImgPath } from '../../../util/formatImgPath';
import DefaultImg from '../../../assets/defaultImg.png';

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
  const { myData } = useMyProfileInfo();
  const { getCommentList, isLoading, isFetching } = useGetComment(projectId);

  const profileImg = myData?.profileImg
    ? `${import.meta.env.VITE_APP_IMAGE_CDN_URL}/${formatImgPath(
        myData.profileImg
      )}?w=86&h=86&fit=crop&crop=entropy&auto=format,enhance&q=60`
    : DefaultImg;

  if (!getCommentList) {
    return (
      <S.Container>
        <S.CommentCountsContainer>
          <S.Count>댓글 없음</S.Count>
        </S.CommentCountsContainer>
      </S.Container>
    );
  }

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <S.Container>
      <S.CommentCountsContainer>
        <S.Count>댓글 {getCommentList.length}개</S.Count>
      </S.CommentCountsContainer>

      <S.CommentInput>
        <Avatar size='55px' image={profileImg} />
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
