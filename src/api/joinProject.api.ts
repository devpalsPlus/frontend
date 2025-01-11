import { joinProject } from '../models/joinProject';
import { ProjectDetailExtended } from '../models/projectDetail';
import { httpClient } from './http.api';

export const getProjectData = async (
  id: number
): Promise<ProjectDetailExtended> => {
  const response = await httpClient.get(`/project/${id}`);
  return response.data;
};

export const applicantProject = async (formData: joinProject, id: number) => {
  const response = await httpClient.post(`/project/${id}/applicant`, formData);
  return response.status;
};
