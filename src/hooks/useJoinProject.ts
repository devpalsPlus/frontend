import { useQuery } from '@tanstack/react-query';
import { getProjectData } from '../api/joinProject.api';

const useGetProjectData = (id: number) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['projectDataAll', id],
    queryFn: async () => await getProjectData(id),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isFetching };
};

export default useGetProjectData;
