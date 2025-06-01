import { ApiAllReports, type ApiPostContent } from '../models/report';
import { httpClient } from './http.api';

export const postReport = async (formData: ApiPostContent) => {
  try {
    const response = await httpClient.post(`/report`, formData);
    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllReports = async () => {
  try {
    const response = await httpClient.get<ApiAllReports>(`/reports`);
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
