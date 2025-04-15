import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectCommandList } from '../queries/keys';
import { deleteCommand } from '../../api/command.api';

const useDeleteCommand = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (commandId: number) => deleteCommand(id, commandId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ProjectCommandList.projectCommand, id],
        exact: true,
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const removeCommand = async (commandId: number) => {
    mutation.mutate(commandId);
  };

  return { removeCommand };
};

export default useDeleteCommand;
