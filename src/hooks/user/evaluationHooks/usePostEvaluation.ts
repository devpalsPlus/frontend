import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postEvaluation } from '../../../api/evaluation.api';
import { ProjectMemberListEval } from '../../queries/keys';
import type { apiEvaluatedUser } from '../../../models/evaluation';

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
