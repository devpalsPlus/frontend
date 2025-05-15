import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchComment } from '../../../api/comment.api';
import { ProjectCommentList } from '../../queries/user/keys';
const usePutComment = (id: number, commentId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (content: string) => patchComment(id, commentId, content),
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

  const changeComment = async (content: string) => {
    mutation.mutate(content);
  };

  return {
    changeComment,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default usePutComment;
