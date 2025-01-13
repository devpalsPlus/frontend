import { ManagedProject } from '../models/manageMyProject';
import { httpClient } from './http.api';

export const getMyProjectLists = async () => {
  const response = await httpClient.get<ManagedProject[]>(`/project/my`);
  return response.data;
};
