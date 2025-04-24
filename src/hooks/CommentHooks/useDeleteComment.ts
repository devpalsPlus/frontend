import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectCommentList } from '../queries/keys';
import { deleteComment } from '../../api/comment.api';

const useDeleteComment = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (commentId: number) => deleteComment(id, commentId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ProjectCommentList.projectComment, id],
        exact: true,
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const removeComment = async (commentId: number) => {
    mutation.mutate(commentId);
  };

  return { removeComment };
};

export default useDeleteComment;
