import { useNavigate } from 'react-router-dom';
import { postLogin, postResetPassword, postSignUp } from '../api/auth.api';
import { registerFormValues } from '../pages/register/Register';
import { changePasswordFormValues } from '../pages/changePassword/ChangePassword';
import { loginFormValues } from '../pages/login/Login';
import useAuthStore from '../store/authStore';
import { useAlert } from './useAlert';
import { useMutation } from '@tanstack/react-query';
import { LoginResponse } from '../models/auth';

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore();
  const { showAlert } = useAlert();

  const signupMutaton = useMutation<
    void,
    Error,
    { email: string; password: string; nickname: string }
  >({
    mutationFn: async ({ email, password, nickname }) => {
      await postSignUp({ email, password, nickname });
    },
    onSuccess: () => {
      showAlert('회원가입 완료되었습니다.');
      navigate('/login');
    },
    onError: () => {
      showAlert('회원가입 실패하였습니다.');
    },
  });

  const resetPasswordMutation = useMutation<
    void,
    Error,
    { email: string; newPassword: string }
  >({
    mutationFn: async ({ email, newPassword }) => {
      await postResetPassword({ email, newPassword });
    },
    onSuccess: () => {
      showAlert('비밀번호가 성공적으로 재설정 되었습니다.');
      navigate('/login');
    },
    onError: () => {
      showAlert('비밀번호 재설정에 실패하였습니다.');
    },
  });

  const userLoginMutation = useMutation<
    LoginResponse,
    Error,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) => {
      const response = await postLogin({ email, password });
      const { accessToken, refreshToken } = response.data;
      return { accessToken, refreshToken };
    },
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;

      showAlert('로그인 되었습니다.');
      storeLogin(accessToken, refreshToken);
      navigate('/main');
    },
    onError: () => {
      showAlert('가입되지 않은 계정입니다.');
    },
  });

  const userSignup = (
    data: Pick<registerFormValues, 'email' | 'password' | 'nickname'>
  ) => {
    signupMutaton.mutate(data);
  };

  const resetPassword = (
    data: Pick<changePasswordFormValues, 'email' | 'newPassword'>
  ) => {
    resetPasswordMutation.mutate(data);
  };

  const userLogin = (data: loginFormValues) => {
    userLoginMutation.mutate(data);
  };

  const userLogout = () => {
    storeLogout();
    showAlert('로그아웃 되었습니다.');
    navigate('/main');
  };

  return { userSignup, resetPassword, userLogin, userLogout };
};
