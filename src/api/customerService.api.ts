import type { ApiFAQ, SearchKeyword } from '../models/customerService';
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
