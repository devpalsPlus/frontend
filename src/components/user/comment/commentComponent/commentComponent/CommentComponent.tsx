import { Dispatch, SetStateAction } from 'react';
import * as S from './CommentComponent.styled';
import { Link } from 'react-router-dom';
import CommentInput from '../../commentInput/CommentInput';
import type { CommentType } from '../../../../../models/comment';
import { ROUTES } from '../../../../../constants/routes';
import Avatar from '../../../../common/avatar/Avatar';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

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
    <S.Container $reply={false} key={index}>
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
                <ChatBubbleBottomCenterTextIcon width={20} height={20} />
              </S.Icon>
              <S.ReplyContent>답글 달기</S.ReplyContent>
            </S.ReplyInputButton>
          )}
        </S.CommentWrapper>
      </S.Wrapper>
      {activateId === item.id && !onReplyMessage && (
        <S.ReplyInput>
          <CommentInput
            reply={true}
            projectId={projectId}
            commentId={item.id}
          />
        </S.ReplyInput>
      )}
    </S.Container>
  );
};

export default CommentComponent;
