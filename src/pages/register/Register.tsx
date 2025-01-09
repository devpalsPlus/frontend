import * as S from '../login/Login.styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
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
import {
  postVerificationEmail,
  postVerifyEmailCode,
  postCheckNickname,
} from '../../api/auth.api';

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
  const [emailMessage, setEmailMessage] = useState<string | null>(null);
  const [codeMessage, setCodeMessage] = useState<string | null>(null);
  const [nicknameMessage, setNicknameMessage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
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

  const handleEmail = async (email: string) => {
    if (!email) {
      setEmailMessage(null);
      return;
    }
    try {
      const response = await postVerificationEmail(email);
      console.log('이메일코드 발송:', response);
      if (response?.status === 201) {
        setEmailMessage('인증 코드가 이메일로 전송되었습니다.');
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        setEmailMessage('유효한 이메일을 입력해주세요.');
      } else {
        setEmailMessage('서버 내부 오류로 인해 인증 코드 확인에 실패했습니다.');
      }
    }
  };

  const handleVerifyCode = async (email: string, code: string) => {
    if (!email || !code) {
      setCodeMessage(null);
      return;
    }
    try {
      const response = await postVerifyEmailCode({ email, code });
      if (response?.status === 200) {
        setCodeMessage('인증코드가 확인되었습니다.');

        setValue('verificationCode', code);
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setCodeMessage('인증 코드가 만료되었습니다.');
      } else {
        setCodeMessage('이메일과 인증코드를 다시 확인해주세요.');
      }
    }
  };

  const handleCheckNickname = async (nickname: string) => {
    if (!nickname) {
      setNicknameMessage(null);
      return;
    }
    try {
      const response = await postCheckNickname(nickname);
      setNicknameMessage(response?.message as string);
    } catch (error: any) {
      setNicknameMessage(error.response.data.message);
    }
  };

  const onSubmit = (data: registerFormValues, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    console.log('회원가입: ', data);
  };

  return (
    <S.Container>
      <h1 className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
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
                    if (!value) {
                      setEmailMessage(null);
                    } else {
                      setEmailMessage('');
                    }
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
                  handleEmail(field.value);
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
                    if (!value) {
                      setCodeMessage(null);
                    } else {
                      setCodeMessage('');
                    }
                  }}
                />
                {errors.verificationCode && (
                  <S.ErrorMessage>
                    {errors.verificationCode.message}
                  </S.ErrorMessage>
                )}
                {!errors.verificationCode && codeMessage && (
                  <S.ErrorMessage>{codeMessage}</S.ErrorMessage>
                )}
              </S.InputWrapper>
              <button
                type='button'
                onClick={() => {
                  handleVerifyCode(getValues('email'), field.value);
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
          <button type='submit'>회원가입</button>
        </S.ButtonWrapper>
      </form>
    </S.Container>
  );
};

export default Register;
