import * as S from '../login/Login.styled';
import { Link } from 'react-router-dom';
import Mainlogo from '../../assets/mainlogo.svg';
import Title from '../../components/common/title/Title';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import InputText from '../../components/auth/InputText';
import {
  EnvelopeIcon,
  KeyIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import { postCheckNickname } from '../../api/auth.api';
import useEmailVerification from '../../hooks/useEmailVerification';
import axios from 'axios';

const registerSchema = z
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
    nickname: z
      .string()
      .nonempty('닉네임을 입력해주세요.')
      .max(6, '6자 이하로 입력해주세요.')
      .regex(
        /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9~`!@#$%^&*()\-_=+]{1,6}$/,
        '특수문자는 (~,`,!,@,#,$,%,^,&,*,(,),-,_,+)만 사용할 수 있습니다.'
      ),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 다릅니다.',
    path: ['passwordConfirm'],
  });

type registerFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const [nicknameMessage, setNicknameMessage] = useState<string | null>(null);

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

  const handleClickEmail = (email: string) => {
    handleEmail(email);
  };

  const handleClickCode = (email: string, code: string) => {
    handleVerifyCode(email, code);
  };

  const handleCheckNickname = async (nickname: string) => {
    if (!nickname) {
      setNicknameMessage(null);
      return;
    }
    try {
      const response = await postCheckNickname(nickname);
      setNicknameMessage(response?.message as string);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setNicknameMessage(error.response?.data.message);
      }
    }
  };

  const onSubmit = (data: registerFormValues, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();

    if (!isValid) {
      alert('모든 필드를 정확히 입력해주세요.');
      return;
    }

    const { email, password, nickname } = data;
    const requestData = { email, password, nickname };
    console.log('회원가입: ', requestData);
  };

  return (
    <S.Container>
      <h1 className='logo'>
        <Link to='/'>
          <img src={Mainlogo} alt='logo' />
        </Link>
      </h1>
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
                  autoComplete='off'
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(e);
                    if (!value) {
                      setNicknameMessage(null);
                    } else {
                      setNicknameMessage('');
                    }
                  }}
                />
                {errors.nickname && (
                  <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
                )}
                {!errors.nickname && nicknameMessage && (
                  <S.ErrorMessage>{nicknameMessage}</S.ErrorMessage>
                )}
              </S.InputWrapper>
              <button
                type='button'
                onClick={() => {
                  handleCheckNickname(field.value);
                }}
              >
                중복 확인
              </button>
            </S.InputContainer>
          )}
        />
        <S.ButtonWrapper>
          <button type='submit' disabled={!isValid}>
            회원가입
          </button>
        </S.ButtonWrapper>
      </form>
    </S.Container>
  );
};

export default Register;
