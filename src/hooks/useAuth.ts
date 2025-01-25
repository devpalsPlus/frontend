import { useNavigate } from 'react-router-dom';
import { postLogin, postResetPassword, postSignUp } from '../api/auth.api';
import { registerFormValues } from '../pages/register/Register';
import { changePasswordFormValues } from '../pages/changePassword/ChangePassword';
import { loginFormValues } from '../pages/login/Login';
import useAuthStore from '../store/authStore';
import { useAlert } from './useAlert';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginResponse } from '../models/auth';
import { ROUTES } from '../constants/routes';
import { AxiosError } from 'axios';
import { myInfoKey } from './queries/keys';

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore.getState();
  const { showAlert } = useAlert();
  const queryClient = useQueryClient();

  const signupMutation = useMutation<
    void,
    AxiosError,
    { email: string; password: string; nickname: string }
  >({
    mutationFn: async ({ email, password, nickname }) => {
      await postSignUp({ email, password, nickname });
    },
    onSuccess: () => {
      showAlert('회원가입 완료되었습니다.');
      navigate(ROUTES.login);
    },
    onError: () => {
      showAlert('회원가입 실패하였습니다.');
    },
  });

  const resetPasswordMutation = useMutation<
    void,
    AxiosError,
    { email: string; newPassword: string }
  >({
    mutationFn: async ({ email, newPassword }) => {
      await postResetPassword({ email, newPassword });
    },
    onSuccess: () => {
      showAlert('비밀번호가 성공적으로 재설정 되었습니다.');
      navigate(ROUTES.login);
    },
    onError: () => {
      showAlert('비밀번호 재설정에 실패하였습니다.');
    },
  });

  const userLoginMutation = useMutation<
    LoginResponse,
    AxiosError,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) => {
      const response = await postLogin({ email, password });
      const { accessToken, refreshToken } = response.data;
      const userData = response.user;
      return { accessToken, refreshToken, userData };
    },
    onSuccess: (data) => {
      const { accessToken, refreshToken, userData } = data;
      showAlert('로그인 되었습니다.');
      storeLogin(accessToken, refreshToken, userData);
      navigate(ROUTES.home);
    },
    onError: () => {
      showAlert('가입되지 않은 계정입니다.');
    },
  });

  const userSignup = (
    data: Pick<registerFormValues, 'email' | 'password' | 'nickname'>
  ) => {
    signupMutation.mutate(data);
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
    queryClient.removeQueries({ queryKey: myInfoKey.myProfile });
    showAlert('로그아웃 되었습니다.');
    navigate(ROUTES.home);
  };

  return { userSignup, resetPassword, userLogin, userLogout };
};
