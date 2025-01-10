import { httpClient } from './http.api';

export const getProjectData = async (id: number) => {
  const response = await httpClient.get(`/project/${id}`);
  return response.data;
};
