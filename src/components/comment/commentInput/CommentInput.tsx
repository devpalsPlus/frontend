import * as S from './CommentInput.styled';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useMyProfileInfo } from '../../../hooks/useMyInfo';
import { formatImgPath } from '../../../util/formatImgPath';
import DefaultImg from '../../../assets/defaultImg.png';
import Avatar from '../../common/avatar/Avatar';
import { useForm } from 'react-hook-form';
import useInputFocus from '../../../hooks/useInputFocus';
import usePostReply from '../../../hooks/CommentHooks/usePostReply';
import usePatchReply from '../../../hooks/CommentHooks/usePatchReply';
import usePostComment from '../../../hooks/CommentHooks/usePostComment';
import usePutComment from '../../../hooks/CommentHooks/usePutComment';

type FormValue = {
  commentInput: string;
};

interface CommentInputProps {
  projectId: number;
  reply?: boolean;
  activateEditMode?: number | null;
  comment?: string;
  recomment?: string;
  commentId: number;
  recommentId?: number;
  setActivateEditMode?: Dispatch<SetStateAction<number | null>>;
}

const CommentInput = ({
  projectId,
  reply,
  activateEditMode,
  comment,
  commentId,
  recomment,
  recommentId,
  setActivateEditMode,
}: CommentInputProps) => {
  const { myData } = useMyProfileInfo();
  const {
    handleSubmit: onSubmitHandler,
    watch,
    register,
    setValue,
  } = useForm<FormValue>();

  const { isFocused, handleFocus, handleClick } = useInputFocus();
  const { createComment } = usePostComment(projectId);
  const { changeComment } = usePutComment(projectId, commentId);
  const { createReply } = usePostReply(projectId, commentId);
  const { changeReply } = usePatchReply(recommentId, commentId, projectId);

  const profileImg = myData?.profileImg
    ? `${import.meta.env.VITE_APP_IMAGE_CDN_URL}/${formatImgPath(
        myData.profileImg
      )}?w=86&h=86&fit=crop&crop=entropy&auto=format,enhance&q=60`
    : DefaultImg;

  const hasInput = Boolean(watch('commentInput', ''));

  const handleSubmit = (data: { commentInput: string }) => {
    if (reply) {
      if (activateEditMode) {
        changeReply(data.commentInput);
        setActivateEditMode?.(null);
      } else {
        createReply(data.commentInput);
      }
    } else {
      if (activateEditMode) {
        changeComment(data.commentInput);
        setActivateEditMode?.(null);
      } else {
        createComment(data.commentInput);
      }
    }

    setValue('commentInput', '');
    handleClick();
  };

  useEffect(() => {
    if (comment) setValue('commentInput', comment);
    if (recomment) setValue('commentInput', recomment);
  }, [comment, recomment, setValue]);

  return (
    <S.InputContainer>
      {!activateEditMode && <Avatar size='55px' image={profileImg} />}
      <S.InputWrapper>
        <form
          onSubmit={
            hasInput ? onSubmitHandler(handleSubmit) : (e) => e.preventDefault()
          }
        >
          <S.Input
            {...register('commentInput')}
            type='text'
            placeholder='댓글을 입력하세요'
            onFocus={handleFocus}
          />
          <S.Line $isFocused={isFocused} />
          {isFocused && (
            <S.ButtonWrapper>
              <S.ButtonCancel
                size='small'
                schema='grey'
                radius='primary'
                onClick={handleClick}
              >
                취소
              </S.ButtonCancel>
              <S.ButtonSubmit
                size='small'
                schema={hasInput ? 'primary' : 'grey'}
                radius='primary'
                type='submit'
              >
                {activateEditMode ? '수정' : '등록'}
              </S.ButtonSubmit>
            </S.ButtonWrapper>
          )}
        </form>
      </S.InputWrapper>
    </S.InputContainer>
  );
};

export default CommentInput;
