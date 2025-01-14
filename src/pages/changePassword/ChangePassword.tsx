import * as S from '../login/Login.styled';
import { Link } from 'react-router-dom';
import Mainlogo from '../../assets/mainlogo.svg';
import Title from '../../components/common/title/Title';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import InputText from '../../components/auth/InputText';
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';
import useEmailVerification from '../../hooks/useEmailVerification';
import Button from '../../components/common/Button/Button';
import { ERROR_MESSAGES } from '../../constants/authConstants';
import { useAuth } from '../../hooks/useAuth';

const changePasswordSchema = z
  .object({
    email: z
      .string()
      .email(ERROR_MESSAGES.INVALID_EMAIL)
      .nonempty(ERROR_MESSAGES.EMAIL_REQUIRED),
    verificationCode: z.string().nonempty(ERROR_MESSAGES.CODE_REQUIRED),
    newPassword: z
      .string()
      .min(6, ERROR_MESSAGES.PASSWORD_MIN)
      .regex(/[^a-zA-Z0-9]/, ERROR_MESSAGES.PASSWORD_SPECIAL)
      .nonempty(ERROR_MESSAGES.PASSWORD_REQUIRED),
    newPasswordConfirm: z
      .string()
      .nonempty(ERROR_MESSAGES.PASSWORD_CHECK_CONFIRM),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: ERROR_MESSAGES.PASSWORD_CONFIRM,
    path: ['passwordConfirm'],
  });

export type changePasswordFormValues = z.infer<typeof changePasswordSchema>;

const ChangePassword = () => {
  const { resetPassword } = useAuth();

  const {
    emailMessage,
    codeMessage,
    handleEmail,
    handleVerifyCode,
    handleCodeChange,
    handleEmailChange,
  } = useEmailVerification();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<changePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      verificationCode: '',
      newPassword: '',
      newPasswordConfirm: '',
    },
  });

  const handleClickEmail = async (email: string) => {
    handleEmail(email);
  };

  const handleClickCode = async (email: string, code: string) => {
    handleVerifyCode(email, code);
  };

  const onSubmit = (
    data: Pick<changePasswordFormValues, 'email' | 'newPassword'>,
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();

    if (!isValid) {
      alert('모든 필드를 정확히 입력해주세요.');
      return;
    }

    const { email, newPassword } = data;
    const requestData = { email, newPassword };
    resetPassword(requestData);
  };

  return (
    <S.Container>
      <h1 className='logo'>
        <Link to='/'>
          <img src={Mainlogo} alt='logo' />
        </Link>
      </h1>
      <Title size='semiLarge'>비밀번호 재설정</Title>
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
                  autoComplete='off'
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
          name='newPassword'
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
              {errors.newPassword && (
                <S.ErrorMessage>{errors.newPassword.message}</S.ErrorMessage>
              )}
            </S.InputWrapper>
          )}
        />

        {/* passwordConfirm */}
        <Controller
          name='newPasswordConfirm'
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
              {errors.newPasswordConfirm && (
                <S.ErrorMessage>
                  {errors.newPasswordConfirm.message}
                </S.ErrorMessage>
              )}
            </S.InputWrapper>
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
            재설정 완료
          </Button>
        </S.ButtonWrapper>
      </form>
    </S.Container>
  );
};

export default ChangePassword;
