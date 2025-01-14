import type {
  ProjectLists,
  ProjectStatistic,
} from '../models/mainProjectLists';
import type { SearchFilters } from '../models/searchFilters';
import { httpClient } from './http.api';
let count = 0;
export const fetchProjectLists = async (params: SearchFilters) => {
  try {
    const response = await httpClient.get<ProjectLists>('/project', {
      params,
    });
    console.log('fetchProjectLists', count++, response.data);

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
