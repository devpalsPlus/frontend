import { httpClient } from './http.api';
import { AxiosResponse } from 'axios';

interface EmailRequestBody {
  email: string;
}

interface VerifyCodeRequestBody {
  email: string;
  code: string;
}

interface NicknameResponse {
  message: string;
}

export const postVerificationEmail = async (
  email: string
): Promise<AxiosResponse> => {
  const body: EmailRequestBody = { email };
  return await httpClient.post('/authenticode/send', body);
};

export const postVerifyEmailCode = async (
  email: string,
  code: string
): Promise<AxiosResponse> => {
  const body: VerifyCodeRequestBody = { email, code };
  return await httpClient.post('/authenticode/verify', body);
};

export const postCheckNickname = async (
  nickname: string
): Promise<NicknameResponse> => {
  const body = { nickname };
  const response = await httpClient.post('/user/nickname-check', body);
  return response.data;
};
