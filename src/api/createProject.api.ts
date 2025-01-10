import { FormData } from '../models/createProject';
import { httpClient } from './http.api';

export const createProject = async (formData: FormData) => {
  const response = await httpClient.post(`/project`, formData);
  return response.status;
};
