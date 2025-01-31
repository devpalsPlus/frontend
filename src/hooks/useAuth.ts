import { useNavigate } from 'react-router-dom';
import { postLogin, postResetPassword, postSignUp } from '../api/auth.api';
import { registerFormValues } from '../pages/register/Register';
import { changePasswordFormValues } from '../pages/changePassword/ChangePassword';
import { loginFormValues } from '../pages/login/Login';
import useAuthStore from '../store/authStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginResponse } from '../models/auth';
import { ROUTES } from '../constants/routes';
import { AxiosError } from 'axios';
import { myInfoKey } from './queries/keys';
import { MODAL_MESSAGE } from '../constants/modalMessage';

export const useAuth = (handleModalOpen: (message: string) => void) => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore.getState();
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
      const { accessToken, refreshToken } = response.data;
      const userData = response.user;
      return { accessToken, refreshToken, userData };
    },
    onSuccess: async (data) => {
      const { accessToken, refreshToken, userData } = data;
      handleModalOpen(MODAL_MESSAGE.loginSuccess);
      setTimeout(() => {
        storeLogin(accessToken, refreshToken, userData);
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
    storeLogout();
    queryClient.removeQueries({ queryKey: myInfoKey.myProfile });
    handleModalOpen(MODAL_MESSAGE.logout);
    setTimeout(() => {
      navigate(ROUTES.main);
    }, 1000);
  };

  return { userSignup, resetPassword, userLogin, userLogout };
};
