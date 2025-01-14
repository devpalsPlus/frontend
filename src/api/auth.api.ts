import axios from 'axios';
import { VerifyEmail, VerifyNickname } from '../models/auth';
import { httpClient } from './http.api';
import { registerFormValues } from '../pages/register/Register';
import { changePasswordFormValues } from '../pages/changePassword/ChangePassword';
import { loginFormValues } from '../pages/login/Login';

export const postVerificationEmail = async (email: string) => {
  try {
    const response = await httpClient.post('/authenticode/send', { email });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error response:', error?.response?.data);
      throw error;
    }
  }
};

export const postVerifyEmailCode = async (data: VerifyEmail) => {
  try {
    const response = await httpClient.post('/authenticode/verify', data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error response:', error?.response?.data);
      throw error;
    }
  }
};

export const postCheckNickname = async (nickname: string) => {
  try {
    const response = await httpClient.post<VerifyNickname>(
      '/user/nickname-check',
      { nickname }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error response:', error?.response?.data);
      throw error;
    }
  }
};

export const postSignUp = async (
  data: Pick<registerFormValues, 'email' | 'password' | 'nickname'>
) => {
  try {
    const response = await httpClient.post('/auth/sign-up', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error response:', error?.response?.data);
      throw error;
    }
  }
};

export const postResetPassword = async (
  data: Pick<changePasswordFormValues, 'email' | 'newPassword'>
) => {
  try {
    const response = await httpClient.post('/auth/password/reset', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error response:', error?.response?.data);
      throw error;
    }
  }
};

export const postLogin = async (data: loginFormValues) => {
  try {
    const response = await httpClient.post('/auth/login', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error response:', error?.response?.data);
      throw error;
    }
  }
};

// export const postRequestNewTokens = async (refreshToken: string) => {
//   try {
//     const response = await httpClient.post('/auth/refresh', { refreshToken });
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error('error response:', error?.response?.data);
//       throw error;
//     }
//   }
// }
