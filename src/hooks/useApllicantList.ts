import { useQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/keys';
import { getApplicantList } from '../api/applicant.api';
import { ApplicantInfo } from '../models/applicant';

export const useApllicantList = (projectId: number) => {
  const { data } = useQuery<ApplicantInfo[]>({
    queryKey: applicantKey.all,
    queryFn: () => getApplicantList(projectId),
    staleTime: 1 * 60 * 1000,
  });
  return { applicantsData: data };
};
