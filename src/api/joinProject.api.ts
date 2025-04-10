import { FormData } from '../models/createProject';
import { joinProject } from '../models/joinProject';
import { ProjectDetailPlusExtended } from '../models/projectDetail';
import { httpClient } from './http.api';

export const getProjectData = async (
  id: number
): Promise<ProjectDetailPlusExtended> => {
  try {
    const response = await httpClient.get(`/project/${id}`);
    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postProject = async (formData: FormData) => {
  const response = await httpClient.post(`/project`, formData);
  return response.status;
};

export const postApplicantProject = async (
  formData: joinProject,
  id: number
) => {
  const response = await httpClient.post(`/project/${id}/apply`, formData);
  return response.status;
};

export const putProject = async (formData: FormData, id: number) => {
  const response = await httpClient.put(`/project/${id}`, formData);
  return response.status;
};
