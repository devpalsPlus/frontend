import { ManagedProject, ApiManagedProjects } from '../models/manageMyProject';
import { httpClient } from './http.api';

export const getMyProjectLists = async () => {
  const response = await httpClient.get<ApiManagedProjects>(`/project/my`);
  return response.data;
};

export const patchSendResult = async (projectId: number) => {
  const response = await httpClient.put<ManagedProject>(
    `/project/${projectId}/close`
  );
  return response.data;
};
