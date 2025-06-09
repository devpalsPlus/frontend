import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { managedProjectKey } from '../queries/keys';
import { patchSendResult } from '../../api/myProjectList.api';
import { MODAL_MESSAGE } from '../../constants/user/modalMessage';

export const useSendResultMutation = (
  projectId: number,
  openModal: (message: string) => void
) => {
  const queryClient = useQueryClient();

  const sendResultMutaition = useMutation<void, AxiosError>({
    mutationFn: async () => {
      await patchSendResult(projectId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [managedProjectKey.detail, projectId],
      });
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
