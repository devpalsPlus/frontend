import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { patchSendResult } from '../api/myProjectList.api';
import { MODAL_MESSAGE } from '../constants/modalMessage';

export const useSendResultMutation = (
  projectId: number,
  openModal: (message: string) => void
) => {
  const sendResultMutaition = useMutation<void, AxiosError>({
    mutationFn: async () => {
      await patchSendResult(projectId);
    },

    onSuccess: () => {
      openModal(MODAL_MESSAGE.sendResult);
    },

    onError: (error) => {
      console.error(error);
      openModal(MODAL_MESSAGE.needAuth);
    },
  });

  const handleSendResult = () => {
    sendResultMutaition.mutate();
  };

  return { handleSendResult };
};
