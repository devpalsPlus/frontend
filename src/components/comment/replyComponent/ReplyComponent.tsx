import Avatar from '../../common/avatar/Avatar';
import * as S from './ReplyComponent.styled';
import DefaultImg from '../../../assets/defaultImg.png';
import useComment from '../../../hooks/CommentHooks/useComment';
import DropDown from '../../common/dropDown/DropDown';
import DropDownItem from '../../common/dropDown/DropDownItem';
import dropdownButton from '../../../assets/dropdownButton.svg';
import CommentInput from '../commentInput/CommentInput';
import useGetReply from '../../../hooks/CommentHooks/useGetReply';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

interface ReplyComponentProps {
  projectId: number;
  loginUserId: number | undefined;
  commentId: number;
}

const ReplyComponent = ({
  projectId,
  loginUserId,
  commentId,
}: ReplyComponentProps) => {
  const { onEdit, setActivateEditMode, handleDropDownClick, activateEditMode } =
    useComment();

  const { getReplyList, isLoading, isFetching } = useGetReply(
    projectId,
    commentId
  );

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return getReplyList?.map((item, index) => (
    <S.Container key={index}>
      <S.Wrapper>
        <Link
          to={
            item.user.id === loginUserId
              ? `${ROUTES.mypage}`
              : `${ROUTES.userpage}/${item.user.id}`
          }
        >
          <Avatar size={'50px'} image={DefaultImg} />
        </Link>
        <S.CommentWrapper>
          <Link
            to={
              item.user.id === loginUserId
                ? `${ROUTES.mypage}`
                : `${ROUTES.userpage}/${item.user.id}`
            }
          >
            <S.NickName>{item.user.nickname}</S.NickName>
          </Link>

          {activateEditMode === item.id ? (
            <CommentInput
              activateEditMode={activateEditMode}
              recomment={item.content}
              projectId={projectId}
              commentId={commentId}
              recommentId={item.id}
              setActivateEditMode={setActivateEditMode}
              reply={true}
            />
          ) : (
            <S.Comment>{item.content}</S.Comment>
          )}
        </S.CommentWrapper>
      </S.Wrapper>
      <DropDown
        toggleButton={
          <img src={dropdownButton} onClick={handleDropDownClick} />
        }
      >
        <DropDownItem
          projectId={projectId}
          commentId={commentId}
          recommentId={item.id}
          onEdit={() => onEdit(item.id)}
          loginUserId={loginUserId}
          commentUserId={item.user.id}
          userImg={item.user.img}
          userName={item.user.nickname}
          activateEditMode={activateEditMode}
          reply={true}
        />
      </DropDown>
    </S.Container>
  ));
};

export default ReplyComponent;
