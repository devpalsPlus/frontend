import { useQuery } from '@tanstack/react-query';
import { getProjectData } from '../api/joinProject.api';
import { managedProjectKey } from './queries/keys';

const useGetProjectData = (projectId: number) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [managedProjectKey.detail, projectId],
    queryFn: async () => await getProjectData(projectId),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isFetching };
};

export default useGetProjectData;
