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

const changePasswordSchema = z
  .object({
    email: z
      .string()
      .email('올바른 이메일 형식을 입력해주세요.')
      .nonempty('이메일을 입력해주세요.'),
    verificationCode: z.string().nonempty('인증코드를 입력해주세요.'),
    password: z
      .string()
      .min(6, '6자리 이상 입력해주세요.')
      .regex(/[^a-zA-Z0-9]/, '특수문자 1개 이상을 포함해주세요.')
      .nonempty('비밀번호를 입력해주세요.'),
    passwordConfirm: z.string().nonempty('비밀번호 확인을 입력해주세요.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 다릅니다.',
    path: ['passwordConfirm'],
  });

type changePasswordFormValues = z.infer<typeof changePasswordSchema>;

const ChangePassword = () => {
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
      password: '',
      passwordConfirm: '',
    },
  });

  const handleClickEmail = async (email: string) => {
    handleEmail(email);
  };

  const handleClickCode = async (email: string, code: string) => {
    handleVerifyCode(email, code);
  };

  const onSubmit = (
    data: changePasswordFormValues,
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();

    if (!isValid) {
      alert('모든 필드를 정확히 입력해주세요.');
      return;
    }

    const { email, password } = data;
    const newPassword = password;
    const requestData = { email, newPassword };
    console.log('비밀번호 재설정: ', requestData);
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
              <button
                type='button'
                onClick={() => {
                  handleClickEmail(field.value);
                }}
              >
                메일 전송
              </button>
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
              <button
                type='button'
                onClick={() => {
                  handleClickCode(getValues('email'), field.value);
                }}
              >
                인증 확인
              </button>
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
        <S.ButtonWrapper>
          <button type='submit' disabled={!isValid}>
            재설정 완료
          </button>
        </S.ButtonWrapper>
      </form>
    </S.Container>
  );
};

export default ChangePassword;
