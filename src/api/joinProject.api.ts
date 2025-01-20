import { FormData } from '../models/createProject';
import { joinProject } from '../models/joinProject';
import { ProjectDetailExtended } from '../models/projectDetail';
import { httpClient } from './http.api';

export const getProjectData = async (
  id: number
): Promise<ProjectDetailExtended> => {
  const response = await httpClient.get(`/project/${id}`);
  return response.data;
};

export const createProject = async (formData: FormData) => {
  const response = await httpClient.post(`/project`, formData);
  return response.status;
};

export const postApplicantProject = async (
  formData: joinProject,
  id: number
) => {
  const response = await httpClient.post(`/project/${id}/applicant`, formData);
  return response.status;
};

export const putProject = async (formData: FormData, id: number) => {
  const response = await httpClient.put(`/project/${id}`, formData);
  return response.status;
};
