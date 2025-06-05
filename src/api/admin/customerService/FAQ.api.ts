import { ApiCommonBasicType } from '../../../models/apiCommon';
import type { WriteBody } from '../../../models/customerService';
import { httpClient } from '../../http.api';

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
  id: number;
  formData: WriteBody;
}) => {
  try {
    await httpClient.put<ApiCommonBasicType>(`faq/${id}`, formData);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteFAQ = async (id: number) => {
  try {
    await httpClient.delete<ApiCommonBasicType>(`faq/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
