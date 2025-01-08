import { ManageMyprojectList } from '../models/manageMyProject';
import { httpClient } from './http';

export const getMyProjectLists = async () => {
  const response = await httpClient.get<ManageMyprojectList[]>(`/project/my`);
  return response.data;
};
