import { httpClient } from './http.api';

export const postInquiry = async (formData: FormData) => {
  try {
    const response = await httpClient.post('/inquiry', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
  } catch (e) {
    console.log('문의하기 에러', e);
  }
};
