import type {
  ProjectLists,
  ProjectStatistic,
} from '../models/mainProjectLists';
import { SearchFilters } from '../models/SearchFilters';
import { httpClient } from './http.api';
export const fetchProjectLists = async (params: SearchFilters) => {
  try {
    const response = await httpClient.get<ProjectLists>('/project', {
      params,
    });

    return response.data;
  } catch (e) {
    console.log('fetchProjectListsE', e);
  }
};

export const fetchProjectStatistic = async () => {
  try {
    const response = await httpClient.get<ProjectStatistic>('/project/count');
    return response.data;
  } catch (e) {
    console.log('fetchProjectStatisticE', e);
  }
};
