import { Link } from 'react-router-dom';
import * as S from './Login.styled';
import logo from '../../assets/logo.png';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { KeyIcon } from '@heroicons/react/24/outline';
import InputText from '../../components/auth/InputText';
import Title from '../../components/common/title/Title';

const Login = () => {
  return (
    <S.Container>
      <h1 className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </h1>
      <Title size='semiLarge'>로그인</Title>
      <form>
        <fieldset>
          <EnvelopeIcon />
          <InputText placeholder='이메일' inputType='email' />
        </fieldset>
        <fieldset>
          <KeyIcon />
          <InputText placeholder='비밀번호' inputType='password' />
        </fieldset>
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
        <Link to='/register'>
          <button>회원가입</button>
        </Link>
      </S.WrapperRegister>
    </S.Container>
  );
};

export default Login;
