import axios from 'axios';
import { VerifyEmail, VerifyNickname } from '../models/auth';
import { httpClient } from './http.api';

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
