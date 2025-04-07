import * as S from './CommandInput.styled';
import { useMyProfileInfo } from '../../../hooks/useMyInfo';
import { formatImgPath } from '../../../util/formatImgPath';
import DefaultImg from '../../../assets/defaultImg.png';
import Avatar from '../../common/avatar/Avatar';
import { useForm } from 'react-hook-form';
import useInputFocus from '../../../hooks/useInputFocus';

type FormValue = {
  commandInput: string;
};

interface CommandInputProps {
  reply?: boolean;
}

const CommandInput = ({ reply }: CommandInputProps) => {
  const { myData } = useMyProfileInfo();
  const {
    handleSubmit: onSubmitHandler,
    watch,
    register,
  } = useForm<FormValue>();
  const { isFocused, handleFocus, handleClick } = useInputFocus();

  const profileImg = myData?.profileImg
    ? `${import.meta.env.VITE_APP_IMAGE_CDN_URL}/${formatImgPath(
        myData.profileImg
      )}?w=86&h=86&fit=crop&crop=entropy&auto=format,enhance&q=60`
    : DefaultImg;

  const hasInput = Boolean(watch('commandInput', ''));

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.InputContainer>
      <Avatar size='55px' image={profileImg} />
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
                등록
              </S.ButtonSubmit>
            </S.ButtonWrapper>
          )}
        </form>
      </S.InputWrapper>
    </S.InputContainer>
  );
};

export default CommandInput;
