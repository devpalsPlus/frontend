import type { ApiCommonBasicType } from '../../../models/apiCommon';
import type { WriteBody } from '../../../models/customerService';
import { httpClient } from '../../http.api';

export const postNotice = async (formData: WriteBody) => {
  try {
    await httpClient.post<ApiCommonBasicType>(`/notice`, formData);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const putNotice = async (id: number, formData: WriteBody) => {
  try {
    await httpClient.put<ApiCommonBasicType>(`/notice/${id}`, formData);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteNotice = async (id: number) => {
  try {
    await httpClient.delete<ApiCommonBasicType>(`/notice/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
