import * as S from '../../login/Login.styled';
import { Link } from 'react-router-dom';
import Mainlogo from '../../../assets/mainlogo.svg';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import {
  EnvelopeIcon,
  KeyIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import { ERROR_MESSAGES } from '../../../constants/user/authConstants';
import { useAuth } from '../../../hooks/useAuth';
import { useModal } from '../../../hooks/useModal';
import useEmailVerification from '../../../hooks/user/useEmailVerification';
import useNickNameVerification from '../../../hooks/user/useNicknameVerification';
import { ROUTES } from '../../../constants/routes';
import Title from '../../../components/common/title/Title';
import InputText from '../../../components/user/auth/InputText';
import Button from '../../../components/common/Button/Button';
import Modal from '../../../components/common/modal/Modal';

const registerSchema = z
  .object({
    email: z
      .string()
      .email(ERROR_MESSAGES.INVALID_EMAIL)
      .nonempty(ERROR_MESSAGES.EMAIL_REQUIRED),
    verificationCode: z.string().nonempty(ERROR_MESSAGES.CODE_REQUIRED),
    password: z
      .string()
      .min(6, ERROR_MESSAGES.PASSWORD_MIN)
      .regex(/[^a-zA-Z0-9]/, ERROR_MESSAGES.PASSWORD_SPECIAL)
      .nonempty(ERROR_MESSAGES.PASSWORD_REQUIRED),
    passwordConfirm: z.string().nonempty(ERROR_MESSAGES.PASSWORD_CHECK_CONFIRM),
    nickname: z
      .string()
      .nonempty(ERROR_MESSAGES.NICKNAME_REQUIRED)
      .max(6, ERROR_MESSAGES.NICKNAME_LENGTH)
      .regex(
        /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9~`!@#$%^&*()\-_=+]{1,6}$/,
        ERROR_MESSAGES.NICKNAME_FORMAT
      ),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: ERROR_MESSAGES.PASSWORD_CONFIRM,
    path: ['passwordConfirm'],
  });

export type registerFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const [nicknameText, setNicknameText] = useState('');
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { userSignup } = useAuth(handleModalOpen);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<registerFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      verificationCode: '',
      password: '',
      passwordConfirm: '',
      nickname: '',
    },
  });

  const {
    emailMessage,
    codeMessage,
    handleEmail,
    handleVerifyCode,
    handleCodeChange,
    handleEmailChange,
  } = useEmailVerification();

  const { nicknameMessage, handleDuplicationNickname } =
    useNickNameVerification();

  const handleClickEmail = (email: string) => {
    handleEmail(email);
  };

  const handleClickCode = (email: string, code: string) => {
    handleVerifyCode(email, code);
  };

  const onSubmit = (
    data: Pick<registerFormValues, 'email' | 'password' | 'nickname'>,
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();

    if (!isValid) {
      alert('모든 필드를 정확히 입력해주세요.');
      return;
    }

    const { email, password, nickname } = data;
    const requestData = { email, password, nickname };
    userSignup(requestData);
  };

  return (
    <S.Container>
      <S.LogoH1>
        <Link to={ROUTES.main}>
          <img src={Mainlogo} alt='logo' />
        </Link>
      </S.LogoH1>
      <Title size='semiLarge'>회원가입</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <S.InputContainer>
              <S.InputWrapper>
                <InputText
                  inputType='email'
                  placeholder='이메일'
                  icon={<EnvelopeIcon />}
                  autoComplete='auto'
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(e);
                    handleEmailChange(value);
                  }}
                />
                {errors.email && (
                  <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
                )}
                {!errors.email && emailMessage && (
                  <S.ErrorMessage>{emailMessage}</S.ErrorMessage>
                )}
              </S.InputWrapper>
              <Button
                size='primary'
                schema='primary'
                radius='large'
                type='button'
                onClick={() => {
                  handleClickEmail(field.value);
                }}
              >
                메일 전송
              </Button>
            </S.InputContainer>
          )}
        />

        {/* verificationCode */}
        <Controller
          name='verificationCode'
          control={control}
          render={({ field }) => (
            <S.InputContainer>
              <S.InputWrapper>
                <InputText
                  inputType='text'
                  placeholder='인증코드'
                  icon={<EnvelopeIcon />}
                  autoComplete='off'
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(e);
                    handleCodeChange(value);
                  }}
                />
                {(errors.verificationCode || codeMessage) && (
                  <S.ErrorMessage>
                    {errors.verificationCode
                      ? errors.verificationCode.message
                      : codeMessage}
                  </S.ErrorMessage>
                )}
              </S.InputWrapper>
              <Button
                size='primary'
                schema='primary'
                radius='large'
                type='button'
                onClick={() => {
                  handleClickCode(getValues('email'), field.value);
                }}
              >
                인증 확인
              </Button>
            </S.InputContainer>
          )}
        />

        {/* password */}
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <S.InputWrapper>
              <InputText
                inputType='password'
                placeholder='비밀번호'
                icon={<KeyIcon />}
                autoComplete='off'
                {...field}
              />
              {errors.password && (
                <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
              )}
            </S.InputWrapper>
          )}
        />

        {/* passwordConfirm */}
        <Controller
          name='passwordConfirm'
          control={control}
          render={({ field }) => (
            <S.InputWrapper>
              <InputText
                inputType='password'
                placeholder='비밀번호 확인'
                icon={<KeyIcon />}
                autoComplete='off'
                {...field}
              />
              {errors.passwordConfirm && (
                <S.ErrorMessage>
                  {errors.passwordConfirm.message}
                </S.ErrorMessage>
              )}
            </S.InputWrapper>
          )}
        />

        {/* nickname */}
        <Controller
          name='nickname'
          control={control}
          render={({ field }) => (
            <S.InputContainer>
              <S.InputWrapper>
                <InputText
                  inputType='text'
                  placeholder='닉네임'
                  icon={<FaceSmileIcon />}
                  autoComplete='auto'
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(e);
                    setNicknameText(value);
                  }}
                />
                {errors.nickname ? (
                  <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
                ) : (
                  <S.ErrorMessage>{nicknameMessage}</S.ErrorMessage>
                )}
              </S.InputWrapper>
              <Button
                size='primary'
                schema='primary'
                radius='large'
                type='button'
                onClick={() => {
                  handleDuplicationNickname(nicknameText);
                }}
              >
                중복 확인
              </Button>
            </S.InputContainer>
          )}
        />
        <S.ButtonWrapper>
          <Button
            size='primary'
            schema='primary'
            radius='large'
            type='submit'
            disabled={!isValid}
          >
            회원가입
          </Button>
        </S.ButtonWrapper>
      </form>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default Register;
