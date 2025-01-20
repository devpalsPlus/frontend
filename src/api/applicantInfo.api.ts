import { ApplicantInfo } from '../models/applicant';
import { httpClient } from './http.api';

export const getApplicantInfo = async (projectId: number) => {
  const response = await httpClient.get<ApplicantInfo[]>(
    `/project/${projectId}/applicant`
  );
  return response.data;
};
