import type {
  ProjectLists,
  ProjectStatistic,
} from '../models/mainProjectLists';
import { SearchFilters } from '../models/SearchFilters';
import { httpClient } from './http.api';

export const getProjectLists = async (params: SearchFilters) => {
  try {
    const response = await httpClient.get<ProjectLists>('/project', {
      params,
    });

    return response.data;
  } catch (e) {
    console.log('getProjectLists', e);
  }
};

export const getProjectStatistic = async () => {
  try {
    const response = await httpClient.get<ProjectStatistic>('/project/count');
    return response.data;
  } catch (e) {
    console.log('getProjectStatistic', e);
  }
};
