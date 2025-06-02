import type { ApiCommonBasicType } from '../../../models/apiCommon';
import { httpClient } from '../../http.api';

export const postNotice = async (formData: FormData) => {
  try {
    await httpClient.post<ApiCommonBasicType>(`/notice`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const putNotice = async (id: number, formData: FormData) => {
  try {
    await httpClient.put<ApiCommonBasicType>(`/notice/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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
