import { useQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/keys';
import { getApplicantInfo } from '../api/applicantInfo.api';
import { ApplicantInfo } from '../models/applicant';

export const useApllicantInfo = (projectId: number) => {
  const { data } = useQuery<ApplicantInfo[]>({
    queryKey: applicantKey.info,
    queryFn: () => getApplicantInfo(projectId),
    staleTime: 1 * 60 * 1000,
  });
  return { applicantData: data };
};
