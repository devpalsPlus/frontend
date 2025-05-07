import type { ApiCommonBasicType } from '../models/apiCommon';
import { httpClient } from './http.api';

export const postInquiry = async (formData: FormData) => {
  try {
    await httpClient.post<ApiCommonBasicType>('/inquiry', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (e) {
    console.error('문의하기 에러', e);
    throw e;
  }
};
