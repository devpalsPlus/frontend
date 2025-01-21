import { ApplicantInfo } from '../models/applicant';
import { httpClient } from './http.api';

export const getApplicantList = async (projectId: number) => {
  const response = await httpClient.get<ApplicantInfo[]>(
    `/project/${projectId}/applicant`
  );
  return response.data;
};

export const getApplicantInfo = async (projectId: number, userId: number) => {
  const response = await httpClient.get<ApplicantInfo>(
    `/project/${projectId}/applicant/${userId}`
  );
  return response.data;
};
