import type {
  ApiFAQ,
  ApiNotice,
  ApiNoticeDetail,
  NoticeSearch,
  SearchKeyword,
} from '../models/customerService';
import { httpClient } from './http.api';

export const getFAQ = async (params: SearchKeyword) => {
  try {
    const response = await httpClient.get<ApiFAQ>(`/faq`, { params });

    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getNotice = async (params: NoticeSearch) => {
  try {
    const response = await httpClient.get<ApiNotice>(`/notice`, { params });

    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getNoticeDetail = async (id: string) => {
  try {
    const response = await httpClient.get<ApiNoticeDetail>(`/notice/${id}`);

    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
