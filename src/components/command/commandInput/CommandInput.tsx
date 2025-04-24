import * as S from './CommandInput.styled';
import { useMyProfileInfo } from '../../../hooks/useMyInfo';
import { formatImgPath } from '../../../util/formatImgPath';
import DefaultImg from '../../../assets/defaultImg.png';
import Avatar from '../../common/avatar/Avatar';
import { useForm } from 'react-hook-form';
import useInputFocus from '../../../hooks/useInputFocus';
import { Dispatch, SetStateAction, useEffect } from 'react';
import usePostCommand from '../../../hooks/CommandHooks/usePostCommand';
import usePutCommand from '../../../hooks/CommandHooks/usePutCommand';
import usePostReply from '../../../hooks/CommandHooks/usePostReply';
import usePatchReply from '../../../hooks/CommandHooks/usePatchReply';

type FormValue = {
  commandInput: string;
};

interface CommandInputProps {
  projectId: number;
  reply?: boolean;
  activateEditMode?: number | null;
  command?: string;
  recomment?: string;
  commandId: number;
  recommentId?: number;
  setActivateEditMode?: Dispatch<SetStateAction<number | null>>;
}

const CommandInput = ({
  projectId,
  reply,
  activateEditMode,
  command,
  commandId,
  recomment,
  recommentId,
  setActivateEditMode,
}: CommandInputProps) => {
  const { myData } = useMyProfileInfo();
  const {
    handleSubmit: onSubmitHandler,
    watch,
    register,
    setValue,
  } = useForm<FormValue>();

  const { isFocused, handleFocus, handleClick } = useInputFocus();
  const { createCommand } = usePostCommand(projectId);
  const { changeCommand } = usePutCommand(projectId, commandId);
  const { createReply } = usePostReply(projectId, commandId);
  const { changeReply } = usePatchReply(recommentId, commandId, projectId);

  const profileImg = myData?.profileImg
    ? `${import.meta.env.VITE_APP_IMAGE_CDN_URL}/${formatImgPath(
        myData.profileImg
      )}?w=86&h=86&fit=crop&crop=entropy&auto=format,enhance&q=60`
    : DefaultImg;

  const hasInput = Boolean(watch('commandInput', ''));

  const handleSubmit = (data: { commandInput: string }) => {
    if (reply) {
      if (activateEditMode) {
        changeReply(data.commandInput);
        setActivateEditMode?.((prev) =>
          prev === commandId ? null : commandId
        );
      } else {
        createReply(data.commandInput);
      }
    } else {
      if (activateEditMode) {
        changeCommand(data.commandInput);
        setActivateEditMode?.((prev) =>
          prev === commandId ? null : commandId
        );
      } else {
        createCommand(data.commandInput);
      }
    }

    setValue('commandInput', '');
    handleClick();
  };

  useEffect(() => {
    if (command) setValue('commandInput', command);
    if (recomment) setValue('commandInput', recomment);
  }, [command, recomment, setValue]);

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
            {...register('commandInput')}
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

export default CommandInput;
