import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postReply } from '../../api/reply.api';
import { ProjectReplyList } from '../queries/keys';

const usePostReply = (projectId: number, commentId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (content: string) => postReply(projectId, commentId, content),
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

  const createReply = async (content: string) => {
    mutation.mutate(content);
  };

  return {
    createReply,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default usePostReply;
