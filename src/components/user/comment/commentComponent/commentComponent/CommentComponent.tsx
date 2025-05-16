import { Dispatch, SetStateAction } from 'react';
import * as S from './CommentComponent.styled';
import chat from '../../../../../assets/chat.svg';
import { Link } from 'react-router-dom';
import CommentInput from '../../commentInput/CommentInput';
import type { CommentType } from '../../../../../models/comment';
import { ROUTES } from '../../../../../constants/user/routes';
import Avatar from '../../../../common/avatar/Avatar';

interface CommentComponentProps {
  item: CommentType;
  index: number;
  activateEditMode: number | null;
  setActivateEditMode: Dispatch<SetStateAction<number | null>>;
  handleActivateClick: (
    id: number,
    createrId: number | undefined,
    loginUserId: number | undefined,
    commentUserId: number
  ) => void;
  createrId: number | undefined;
  loginUserId: number | undefined;
  activateId: number | null;
  onReplyMessage: boolean;
  projectId: number;
}

const CommentComponent = ({
  item,
  index,
  activateEditMode,
  setActivateEditMode,
  handleActivateClick,
  createrId,
  loginUserId,
  activateId,
  onReplyMessage,
  projectId,
}: CommentComponentProps) => {
  return (
    <S.Container key={index}>
      <S.Wrapper>
        <Link
          to={
            item.user.id === loginUserId
              ? `${ROUTES.mypage}`
              : `${ROUTES.userpage}/${item.user.id}`
          }
        >
          <Avatar size={'55px'} image={item.user.img} />
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
              comment={item.content}
              projectId={projectId}
              commentId={item.id}
              setActivateEditMode={setActivateEditMode}
            />
          ) : (
            <S.Comment>{item.content}</S.Comment>
          )}

          {(loginUserId === item.user.id || createrId === loginUserId) && (
            <S.ReplyInputButton
              onClick={() =>
                handleActivateClick(
                  item.id,
                  createrId,
                  loginUserId,
                  item.user.id
                )
              }
            >
              <S.Icon>
                <img src={chat} />
              </S.Icon>
              <S.ReplyContent>댓글 달기</S.ReplyContent>
            </S.ReplyInputButton>
          )}

          {activateId === item.id && !onReplyMessage && (
            <S.ReplyInput>
              <CommentInput
                reply={true}
                projectId={projectId}
                commentId={item.id}
              />
            </S.ReplyInput>
          )}
        </S.CommentWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default CommentComponent;
