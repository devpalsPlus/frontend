import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putReply } from '../../api/reply.api';
import { ProjectReplyList } from '../queries/keys';

const usePatchReply = (
  recommentId: number | undefined,
  commentId: number,
  projectId: number
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (content: string) => putReply(recommentId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ProjectReplyList.commandReply, commentId, projectId],
        exact: true,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const changeReply = async (content: string) => {
    mutation.mutate(content);
  };

  return {
    changeReply,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default usePatchReply;
