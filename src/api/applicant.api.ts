import type { ApiApplicantInfo, ApiApplicants } from '../models/applicant';
import { httpClient } from './http.api';

export const getApplicantList = async (projectId: number) => {
  const response = await httpClient.get<ApiApplicants>(
    `/project/${projectId}/applicants`
  );
  return response.data;
};

export const getApplicantInfo = async (projectId: number, userId: number) => {
  const response = await httpClient.get<ApiApplicantInfo>(
    `/project/${projectId}/applicants/${userId}`
  );
  return response.data;
};

export const patchPassNonPassStatus = async (
  data: { status: string },
  projectId: number,
  userId: number
) => {
  const requestBody = {
    applicantUserId: userId,
    status: data.status,
  };
  const response = await httpClient.put(
    `/project/${projectId}/applicant`,
    requestBody
  );

  return response.data;
};

export const getPassNonPassList = async (projectId: number) => {
  const response = await httpClient.get(
    `/project/${projectId}/applicants/results`
  );
  return response.data;
};
