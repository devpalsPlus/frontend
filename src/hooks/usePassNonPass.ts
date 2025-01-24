import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchPassNonPassStatus } from '../api/applicant.api';
import { AxiosError } from 'axios';
import { applicantKey } from './queries/keys';

interface useMutationParams {
  isPass: boolean;
  userId: number;
}

export const usePassNonPass = (projectId: number) => {
  const queryClient = useQueryClient();

  const passNonPassMutation = useMutation<void, AxiosError, useMutationParams>({
    mutationFn: async ({ isPass, userId }: useMutationParams) => {
      const data = { status: isPass ? 'ACCEPTED' : 'REJECTED' };
      await patchPassNonPassStatus(data, projectId, userId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [applicantKey.all, projectId],
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });

  const handlePassNonPassStatus = (isPass: boolean, userId: number) => {
    passNonPassMutation.mutate({ isPass, userId });
  };

  return { handlePassNonPassStatus };
};
