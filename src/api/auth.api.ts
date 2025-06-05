import {
  ApiGetAllUsers,
  ApiGetAllUsersPreview,
  type ApiOauth,
  type ApiVerifyNickname,
  type VerifyEmail,
} from '../models/auth';
import { httpClient } from './http.api';
import { loginFormValues } from '../pages/login/Login';
import { registerFormValues } from '../pages/user/register/Register';
import { changePasswordFormValues } from '../pages/user/changePassword/ChangePassword';
import { type SearchType } from '../models/search';

export const postVerificationEmail = async (email: string) => {
  try {
    const response = await httpClient.post('/authenticode/send', { email });
    return response;
  } catch (error) {
    console.error('verificationEmail:', error);
    throw error;
  }
};

export const postVerifyEmailCode = async (data: VerifyEmail) => {
  try {
    const response = await httpClient.post('/authenticode/verify', data);

    return response;
  } catch (error) {
    console.error('verifiyEmailCode:', error);
    throw error;
  }
};

export const getCheckNickname = async (nickname: string) => {
  try {
    const response = await httpClient.get<ApiVerifyNickname>(
      '/user/nickname-check',
      { params: { nickname } }
    );

    return response.data.message;
  } catch (error) {
    console.error('checkNickname:', error);
  }
};

export const postSignUp = async (
  data: Pick<registerFormValues, 'email' | 'password' | 'nickname'>
) => {
  try {
    const response = await httpClient.post('/auth/sign-up', data);

    return response;
  } catch (error) {
    console.error('signup:', error);
    throw error;
  }
};

export const postResetPassword = async (
  data: Pick<changePasswordFormValues, 'email' | 'newPassword'>
) => {
  try {
    const response = await httpClient.post('/auth/password/reset', data);

    return response;
  } catch (error) {
    console.error('resetpassword:', error);
    throw error;
  }
};

export const postLogin = async (data: loginFormValues) => {
  try {
    const response = await httpClient.post('/auth/login', data);

    return response.data;
  } catch (error) {
    console.error('login:', error);
    throw error;
  }
};

export const postRefresh = async () => {
  try {
    const response = await httpClient.post('/auth/refresh');

    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getOauthLogin = async (oauthAccessToken: string) => {
  try {
    const response = await httpClient.get<ApiOauth>(`/auth/oauth-login`, {
      headers: {
        Authorization: `Bearer ${oauthAccessToken}`,
      },
    });

    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getAllUsersPreview = async () => {
  try {
    const response = await httpClient.get<ApiGetAllUsersPreview>(
      `/users/preview`
    );
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getAllUsers = async (params: SearchType) => {
  try {
    const response = await httpClient.get<ApiGetAllUsers>(`/users`, { params });
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
