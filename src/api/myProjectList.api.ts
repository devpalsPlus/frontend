import { ManageMyprojectList } from '../models/manageMyProjectList';
import { httpClient } from './http';

export const getMyProjectLists = async () => {
  const response = await httpClient.get<ManageMyprojectList[]>(`/project/my`);
  return response.data;
};
