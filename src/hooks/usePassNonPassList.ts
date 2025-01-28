import { useQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/keys';
import { getPassNonPassList } from '../api/applicant.api';

export const usePassNonPassList = (projectId: number) => {
  const { data } = useQuery({
    queryKey: applicantKey.passNonPass,
    queryFn: () => getPassNonPassList(projectId),
    staleTime: 1 * 60 * 1000,
  });

  return { passNonPassListData: data };
};
