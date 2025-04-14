import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postCommand } from '../api/command.api';
import { managedProjectKey } from './queries/keys';

const useCommand = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (content: string) => postCommand(id, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [managedProjectKey.detail, id],
        exact: true,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const createCommand = async (content: string) => {
    mutation.mutate(content);
  };

  return {
    createCommand,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default useCommand;
