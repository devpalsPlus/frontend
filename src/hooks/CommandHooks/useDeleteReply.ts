import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectReplyList } from '../queries/keys';
import { deleteReply } from '../../api/reply.api';

const useDeleteReply = (commentId: number, projectId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (recommentId: number) => deleteReply(recommentId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ProjectReplyList.commandReply, commentId, projectId],
        exact: true,
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const removeReply = async (recommentId: number) => {
    mutation.mutate(recommentId);
  };

  return { removeReply };
};

export default useDeleteReply;
