import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchPassNonPassStatus } from '../api/applicant.api';
import { AxiosError } from 'axios';
import { applicantKey } from './queries/keys';
import { MODAL_MESSAGE } from '../constants/modalMessage';

interface useMutationParams {
  isPass: boolean;
  userId: number;
}

export const usePassNonPass = (
  projectId: number,
  openModal: (message: string) => void
) => {
  const queryClient = useQueryClient();

  const passNonPassMutation = useMutation<void, AxiosError, useMutationParams>({
    mutationFn: async ({ isPass, userId }: useMutationParams) => {
      const data = { status: isPass ? 'ACCEPTED' : 'REJECTED' };
      await patchPassNonPassStatus(data, projectId, userId);
    },

    onSuccess: (_, { isPass }) => {
      queryClient.invalidateQueries({
        queryKey: [applicantKey.all, projectId],
      });

      const successMessage = isPass
        ? MODAL_MESSAGE.pass
        : MODAL_MESSAGE.nonPass;
      openModal(successMessage);
    },

    onError: (error) => {
      console.error(error);
      openModal(MODAL_MESSAGE.equalStatus);
    },
  });

  const handlePassNonPassStatus = (isPass: boolean, userId: number) => {
    passNonPassMutation.mutate({ isPass, userId });
  };

  return { handlePassNonPassStatus };
};
