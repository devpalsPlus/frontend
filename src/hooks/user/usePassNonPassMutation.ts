import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { applicantKey } from '../queries/user/keys';
import { MODAL_MESSAGE } from '../../constants/user/modalMessage';
import { patchPassNonPassStatus } from '../../api/applicant.api';

export interface useMutationParams {
  status: 'ACCEPTED' | 'REJECTED' | 'WAITING';
  userId: number;
}

export const usePassNonPassMutation = (
  projectId: number,
  openModal: (message: string) => void
) => {
  const queryClient = useQueryClient();

  const passNonPassMutation = useMutation<void, AxiosError, useMutationParams>({
    mutationFn: async ({ status, userId }: useMutationParams) => {
      const data = { status: status };
      await patchPassNonPassStatus(data, projectId, userId);
    },

    onSuccess: (_, { status }) => {
      queryClient.invalidateQueries({
        queryKey: [applicantKey.all, projectId],
      });

      queryClient.invalidateQueries({
        queryKey: [applicantKey.passNonPass, projectId],
      });

      let successMessage;
      switch (status) {
        case 'ACCEPTED':
          successMessage = MODAL_MESSAGE.pass;
          break;
        case 'REJECTED':
          successMessage = MODAL_MESSAGE.nonPass;
          break;
        case 'WAITING':
          successMessage = MODAL_MESSAGE.waiting;
          break;
      }

      openModal(successMessage);
    },

    onError: (error) => {
      console.error(error);
      openModal(MODAL_MESSAGE.equalStatus);
    },
  });

  const handlePassNonPassStatus = ({ status, userId }: useMutationParams) => {
    passNonPassMutation.mutate({ status, userId });
  };

  return { handlePassNonPassStatus };
};
