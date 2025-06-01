import type {
  ApiAllInquiries,
  ApiMyComments,
  ApiMyInquiries,
} from './../models/activityLog';
import { httpClient } from './http.api';

export const getMyComments = async () => {
  try {
    const response = await httpClient.get<ApiMyComments>(`user/my-comments`);

    return response.data.data;
  } catch (e) {
    console.error('내 댓글 에러', e);
    throw e;
  }
};

export const getMyInquiries = async () => {
  try {
    const response = await httpClient.get<ApiMyInquiries>(`user/my-inquiries`);

    return response.data.data;
  } catch (e) {
    console.error('내 문의글 에러 ', e);
    throw e;
  }
};

export const getAllInquiries = async () => {
  try {
    const response = await httpClient.get<ApiAllInquiries>(`/inquiry`);
    return response.data.data;
  } catch (e) {
    console.error('전체 문의 조회 에러', e);
    throw e;
  }
};
