import { ApiCommonBasicType } from '../../../models/apiCommon';
import type { ApiFAQDetail, WriteBody } from '../../../models/customerService';
import { httpClient } from '../../http.api';

export const getFAQDetail = async (id: string) => {
  try {
    const response = await httpClient.get<ApiFAQDetail>(`/faq/${id}`);

    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const postFAQ = async (formData: WriteBody) => {
  try {
    await httpClient.post<ApiCommonBasicType>(`faq`, formData);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const putFAQ = async ({
  id,
  formData,
}: {
  id: string;
  formData: WriteBody;
}) => {
  try {
    await httpClient.put<ApiCommonBasicType>(`faq/${id}`, formData);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteFAQ = async (id: string) => {
  try {
    await httpClient.delete<ApiCommonBasicType>(`faq/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
