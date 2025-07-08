import type { ApiBannerList } from '../../models/admin/banner';
import { httpClient } from '../http.api';

export const getBannerList = async () => {
  try {
    const response = await httpClient.get<ApiBannerList>('/banner');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postBanner = async (formData: FormData) => {
  try {
    const response = await httpClient.post('/banner', formData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchBanner = async (formData: FormData, bannerId?: number) => {
  try {
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`${key}:`, {
          name: value.name,
          size: value.size,
          type: value.type,
          lastModified: value.lastModified,
        });
      } else {
        console.log(`${key}:`, value);
      }
    }
    const response = await httpClient.patch(`/banner/${bannerId}`, formData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteBanner = async (bannerId?: number) => {
  try {
    const response = await httpClient.delete(`/banner/${bannerId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
