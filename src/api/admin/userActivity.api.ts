import { httpClient } from '../http.api';
import { ApiUserActivityResponse } from '../../models/admin/userDetail/userActivity';

export const getUserActivityData = async (userId: number) => {
  try {
    const response = await httpClient.get<ApiUserActivityResponse>(
      `/users/${userId}/activities`
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
