import { ManagedProject } from '../models/manageMyProject';
import { httpClient } from './http.api';

export const getMyProjectLists = async () => {
  const response = await httpClient.get<ManagedProject[]>(`/project/my`);
  return response.data;
};

export const patchSendResult = async (projectId: number) => {
  const response = await httpClient.patch<ManagedProject>(
    `/project/${projectId}/is-done`
  );
  return response.data;
};
