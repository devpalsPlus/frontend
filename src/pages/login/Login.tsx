import { Link } from 'react-router-dom';
import * as S from './Login.styled';
import logo from '../../assets/logo.png';
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';
import InputText from '../../components/auth/InputText';
import Title from '../../components/common/title/Title';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요.').nonempty('이메일을 입력해주세요.'),
  password: z.string().nonempty('비밀번호를 입력해주세요.')
});

type loginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<loginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: loginFormValues, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    console.log(data);
  }

  return (
    <S.Container>
      <h1 className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </h1>
      <Title size='semiLarge'>로그인</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <InputText inputType='email' placeholder='이메일' icon={<EnvelopeIcon />} {...register('email')}/>
          {errors.email && <S.ErrorMessage message={errors.email?.message}>{errors.email.message}</S.ErrorMessage>}
        </S.InputWrapper>
        <S.InputWrapper>
          <InputText inputType='password' placeholder='비밀번호' icon={<KeyIcon />} {...register('password')}/>
          {errors.password && <S.ErrorMessage message={errors.password?.message}>{errors.password.message}</S.ErrorMessage>}
        </S.InputWrapper>
        <button type="submit">로그인</button>
      </form>
      <S.WrapperPassword>
        <span>비밀번호를 잊으셨나요?</span>
        <Link to='/change-password'>
          <span>비밀번호 재설정</span>
        </Link>
      </S.WrapperPassword>
      <S.WrapperRegister>
        <p>아직 DevPals 친구가 아니신가요?<br />함께 성장해봐요!</p>
        <Link to='/signup'>
          <button>회원가입</button>
        </Link>
      </S.WrapperRegister>
    </S.Container>
  );
};

export default Login;
