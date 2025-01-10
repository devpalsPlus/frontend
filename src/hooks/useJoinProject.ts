import { useQuery } from '@tanstack/react-query';
import { getProjectData } from '../api/joinProject.api';

const useJoinProject = (id: number) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['joinProject'],
    queryFn: async () => await getProjectData(id),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isFetching };
};

export default useJoinProject;
