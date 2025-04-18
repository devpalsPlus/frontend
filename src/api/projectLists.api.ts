import type {
  ApiProjectLists,
  ApiProjectStatistic,
} from '../models/mainProjectLists';
import { SearchFilters } from '../models/SearchFilters';
import { httpClient } from './http.api';

export const getProjectLists = async (params: SearchFilters) => {
  try {
    const response = await httpClient.get<ApiProjectLists>('/project', {
      params,
    });

    return response.data.data;
  } catch (e) {
    console.log('getProjectLists', e);
  }
};

export const getProjectStatistic = async () => {
  try {
    const response = await httpClient.get<ApiProjectStatistic>(
      '/project/count'
    );

    return response.data.data;
  } catch (e) {
    console.log('getProjectStatistic', e);
  }
};
