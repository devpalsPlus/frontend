import { useQuery } from '@tanstack/react-query';
import { getCommand } from '../../api/command.api';
import { ProjectCommandList } from '../queries/keys';

const useGetCommand = (id: number) => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [ProjectCommandList.projectCommand, id],
    queryFn: async () => await getCommand(id),
    staleTime: 1000 * 60 * 5,
  });

  return {
    getCommandList: data,
    isLoading,
    isFetching,
    isError,
  };
};

export default useGetCommand;
