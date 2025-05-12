import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { ROUTES } from '../../constants/routes';
import * as S from './Login.styled';
import { Spinner } from '../../components/common/loadingSpinner/LoadingSpinner.styled';

function LoginSuccess() {
  const [searchParams] = useSearchParams();
  const { storeLogin } = useAuthStore.getState();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');

    if (accessToken) {
      storeLogin(accessToken);
      localStorage.setItem('accessToken', accessToken);
      navigate(ROUTES.main);
    } else {
      alert('로그인 토큰이 존재하지 않습니다.');
      navigate(ROUTES.login);
    }
  }, []);

  return (
    <S.LoginSuccessContainer>
      <Spinner />
    </S.LoginSuccessContainer>
  );
}

export default LoginSuccess;
