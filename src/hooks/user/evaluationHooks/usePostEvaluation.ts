import { useMutation, useQueryClient } from '@tanstack/react-query';
<<<<<<< HEAD
import { ProjectMemberListEval } from '../../queries/user/keys';
import { apiEvaluatedUser } from '../../../models/evaluation';
import { postEvaluation } from '../../../api/evaluation.api';
=======
import { postEvaluation } from '../../../api/evaluation.api';
import { ProjectMemberListEval } from '../../queries/user/keys';
import { apiEvaluatedUser } from '../../../models/evaluation';
>>>>>>> 4069f4a (chore: 디렉토리 변경에 따른  경로수정)

export const usePostEvaluation = (projectId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userEvaluation: apiEvaluatedUser) =>
      postEvaluation(userEvaluation),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ProjectMemberListEval.MemberListEval, projectId],
        exact: true,
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const createEvaluation = async (userEvaluation: apiEvaluatedUser) => {
    mutation.mutate(userEvaluation);
  };

  return {
    createEvaluation,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
