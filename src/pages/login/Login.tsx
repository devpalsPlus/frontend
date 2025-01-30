import { Link } from 'react-router-dom';
import * as S from './Login.styled';
import Mainlogo from '../../assets/mainlogo.svg';
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';
import InputText from '../../components/auth/InputText';
import Title from '../../components/common/title/Title';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../components/common/Button/Button';
import { ERROR_MESSAGES } from '../../constants/authConstants';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../constants/routes';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/common/modal/Modal';

const loginSchema = z.object({
  email: z
    .string()
    .email(ERROR_MESSAGES.INVALID_EMAIL)
    .nonempty(ERROR_MESSAGES.EMAIL_REQUIRED),
  password: z.string().nonempty(ERROR_MESSAGES.PASSWORD_REQUIRED),
});

export type loginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { userLogin } = useAuth(handleModalOpen);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: loginFormValues, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    userLogin(data);
  };

  return (
    <S.Container>
      <h1 className='logo'>
        <Link to={ROUTES.home}>
          <img src={Mainlogo} alt='logo' />
        </Link>
      </h1>
      <Title size='semiLarge'>로그인</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <S.InputWrapper>
              <InputText
                inputType='email'
                placeholder='이메일'
                icon={<EnvelopeIcon />}
                autoComplete='auto'
                {...field}
              />
              {errors.email && (
                <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
              )}
            </S.InputWrapper>
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <S.InputWrapper>
              <InputText
                inputType='password'
                placeholder='비밀번호'
                icon={<KeyIcon />}
                {...field}
                autoComplete='off'
              />
              {errors.password && (
                <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
              )}
            </S.InputWrapper>
          )}
        />
        <Button size='primary' schema='primary' radius='large'>
          로그인
        </Button>
      </form>
      <S.WrapperPassword>
        <span>비밀번호를 잊으셨나요?</span>
        <Link to='/change-password'>
          <span>비밀번호 재설정</span>
        </Link>
      </S.WrapperPassword>
      <S.WrapperRegister>
        <p>
          아직 DevPals 친구가 아니신가요?
          <br />
          함께 성장해봐요!
        </p>
        <Link to='/signup'>
          <Button size='primary' schema='primary' radius='large'>
            회원가입
          </Button>
        </Link>
      </S.WrapperRegister>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default Login;
