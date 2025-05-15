import { useQuery } from '@tanstack/react-query';
import { applicantKey } from '../queries/user/keys';
import { getApplicantList } from '../api/applicant.api';
import { ApiApplicants } from '../models/applicant';

export const useApllicantList = (projectId: number) => {
  const { data, isLoading } = useQuery<ApiApplicants>({
    queryKey: [applicantKey.all, projectId],
    queryFn: () => getApplicantList(projectId),
    staleTime: 1 * 60 * 1000,
  });
  return { applicantsData: data, isApplicantLoading: isLoading };
};
