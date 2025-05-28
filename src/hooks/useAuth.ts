import { useNavigate } from 'react-router-dom';
import { postLogin, postResetPassword, postSignUp } from '../api/auth.api';
import { loginFormValues } from '../pages/login/Login';
import useAuthStore from '../store/authStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { LoginResponse } from '../models/auth';
import { AxiosError } from 'axios';
import { myInfoKey } from './queries/user/keys';
import { MODAL_MESSAGE } from '../constants/user/modalMessage';
import { ROUTES } from '../constants/user/routes';
import { registerFormValues } from '../pages/user/register/Register';
import { changePasswordFormValues } from '../pages/user/changePassword/ChangePassword';

export const useAuth = (handleModalOpen: (message: string) => void) => {
  const navigate = useNavigate();
  const { login, logout } = useAuthStore.getState();
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
      handleModalOpen(MODAL_MESSAGE.signUpSuccess);
      setTimeout(() => {
        navigate(ROUTES.login);
      }, 1000);
    },
    onError: () => {
      handleModalOpen(MODAL_MESSAGE.signUpFail);
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
    onSuccess: async () => {
      handleModalOpen(MODAL_MESSAGE.changePasswordSuccess);
      setTimeout(() => {
        navigate(ROUTES.login);
      }, 1000);
    },
    onError: () => {
      handleModalOpen(MODAL_MESSAGE.changePasswordFail);
    },
  });

  const userLoginMutation = useMutation<
    LoginResponse,
    AxiosError,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) => {
      const response = await postLogin({ email, password });
      const { accessToken } = response.data;
      const userData = response.user;
      return { accessToken, userData };
    },
    onSuccess: async (data) => {
      const { accessToken, userData } = data;
      handleModalOpen(MODAL_MESSAGE.loginSuccess);
      setTimeout(() => {
        login(accessToken, userData);
        navigate(ROUTES.main);
      }, 1000);
    },
    onError: () => {
      handleModalOpen(MODAL_MESSAGE.loginFail);
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
    logout();
    queryClient.removeQueries({ queryKey: myInfoKey.myProfile });
    useAuthStore.persist.clearStorage();
    handleModalOpen(MODAL_MESSAGE.logout);
    setTimeout(() => {
      navigate(ROUTES.main);
    }, 1000);
  };

  return { userSignup, resetPassword, userLogin, userLogout };
};
