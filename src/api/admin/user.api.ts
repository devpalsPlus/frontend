import type { ApiUserApplicantsData } from '../../models/admin/userDetail/userDetail.applicants';
import type { ApiUserProjectDataResponse } from '../../models/admin/userDetail/userProjectData';
import { httpClient } from '../http.api';

export const postBanUser = async (id: string) => {
  try {
    await httpClient.post(`/ban/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const postWarningUser = async (id: string) => {
  try {
    await httpClient.post(`/warning/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getUserApplicants = async (
  projectId: number,
  applicantId: number
) => {
  try {
    const response = await httpClient.get<ApiUserApplicantsData>(
      `/admin/project/${projectId}/full?applicantId=${applicantId}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getUserProjectData = async (userId: number) => {
  try {
    const response = await httpClient.get<ApiUserProjectDataResponse>(
      `/users/${userId}/projects`
    );
    return response.data.data.appliedProjects;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
