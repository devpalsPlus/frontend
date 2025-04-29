import { ApiPostContent } from '../models/report';
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
