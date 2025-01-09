import { httpClient } from './http';

export const getProjectData = async (id: number) => {
  const response = await httpClient.get(`/project/${id}`);
  return response.data;
};
