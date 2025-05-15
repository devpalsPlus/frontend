import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '../../../api/comment.api';
import { ProjectCommentList } from '../../queries/user/keys';

const usePostComment = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (content: string) => postComment(id, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ProjectCommentList.projectComment, id],
        exact: true,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const createComment = async (content: string) => {
    mutation.mutate(content);
  };

  return {
    createComment,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default usePostComment;
