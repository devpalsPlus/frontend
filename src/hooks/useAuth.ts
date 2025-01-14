import { useNavigate } from 'react-router-dom';
import { postLogin, postResetPassword, postSignUp } from '../api/auth.api';
import { registerFormValues } from '../pages/register/Register';
import { changePasswordFormValues } from '../pages/changePassword/ChangePassword';
import { loginFormValues } from '../pages/login/Login';
import useAuthStore from '../store/authStore';
import { useAlert } from './useAlert';

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore();
  const { showAlert } = useAlert();

  const userSignup = (
    data: Pick<registerFormValues, 'email' | 'password' | 'nickname'>
  ) => {
    postSignUp(data).then(() => {
      showAlert('회원가입 완료되었습니다.');
      navigate('/login');
    });
  };

  const resetPassword = (
    data: Pick<changePasswordFormValues, 'email' | 'newPassword'>
  ) => {
    postResetPassword(data).then(() => {
      showAlert('비밀번호가 성공적으로 재설정 되었습니다.');
      navigate('/login');
    });
  };

  const userLogin = (data: loginFormValues) => {
    postLogin(data).then(
      (res) => {
        showAlert('로그인 되었습니다.');
        storeLogin(res.data.accessToken, res.data.refreshToken);
        navigate('/main');
      },
      (error) => {
        if (error) {
          showAlert('가입되지 않은 계정입니다.');
        }
      }
    );
  };

  const userLogout = () => {
    storeLogout();
    showAlert('로그아웃 되었습니다.');
    navigate('/main');
  };

  return { userSignup, resetPassword, userLogin, userLogout };
};
