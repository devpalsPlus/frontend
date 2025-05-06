import { ApiFAQ } from '../models/customerService';
import { httpClient } from './http.api';

export const getFAQ = async () => {
  try {
    const response = await httpClient.get<ApiFAQ>(`/faq`);

    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
