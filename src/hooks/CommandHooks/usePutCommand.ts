import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectCommandList } from '../queries/keys';
import { patchCommand } from '../../api/command.api';

const usePutCommand = (id: number, commandId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (content: string) => patchCommand(id, commandId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ProjectCommandList.projectCommand, id],
        exact: true,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const changeCommand = async (content: string) => {
    mutation.mutate(content);
  };

  return {
    changeCommand,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default usePutCommand;
