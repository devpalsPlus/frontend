import { httpClient } from './http.api';

export const getChartData = async () => {
  try {
    const response = await httpClient.get('/user/chart');
    return response;
  } catch (error) {
    console.error('chartDataError', error);
    throw error;
  }
};
