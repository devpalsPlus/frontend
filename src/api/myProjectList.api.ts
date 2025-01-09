import { ManageMyprojectList } from '../models/manageMyProject';
import { httpClient } from './http.api';

export const getMyProjectLists = async () => {
  const response = await httpClient.get<ManageMyprojectList[]>(`/project/my`);
  return response.data;
};
