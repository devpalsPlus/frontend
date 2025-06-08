import type { ApiCommonBasicType } from '../../../models/apiCommon';
import type {
  ApiAdminInquiry,
  ApiAdminInquiryDetail,
  InquiryAnswerBody,
} from '../../../models/inquiry';
import { httpClient } from '../../http.api';

export const getAllInquiries = async () => {
  try {
    const response = await httpClient.get<ApiAdminInquiry>(`/inquiry`);
    return response.data.data;
  } catch (e) {
    console.error('전체 문의 조회 에러', e);
    throw e;
  }
};

export const getInquiryDetail = async (id: string) => {
  try {
    const response = await httpClient.get<ApiAdminInquiryDetail>(
      `/inquiry/${id}`
    );

    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const postInquiryAnswer = async ({ id, answer }: InquiryAnswerBody) => {
  try {
    await httpClient.post<ApiCommonBasicType>(`/inquiry/${id}/answer`, answer);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const patchInquiryAnswer = async ({ id, answer }: InquiryAnswerBody) => {
  try {
    await httpClient.patch<ApiCommonBasicType>(`/inquiry/${id}/answer`, answer);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteInquiry = async (id: string) => {
  try {
    await httpClient.delete<ApiCommonBasicType>(`/inquiry/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
