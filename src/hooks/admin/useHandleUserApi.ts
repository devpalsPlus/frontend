import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postBanUser, postWarningUser } from '../../api/admin/user.api';
import { ADMIN_MODAL_MESSAGE } from '../../constants/admin/adminModal';
import { ReportData, UserData } from '../queries/keys';
import { AxiosError } from 'axios';

interface useBanUserProps {
  handleModalOpen: (message: string) => void;
  handleConfirm: () => void;
}

export const useHandleUserApi = ({ handleModalOpen }: useBanUserProps) => {
  const queryClient = useQueryClient();

  const postBan = useMutation<void, AxiosError, number>({
    mutationFn: (id: number) => postBanUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [UserData.allUser],
      });
      queryClient.invalidateQueries({
        queryKey: [UserData.allUserPreview],
      });
      queryClient.invalidateQueries({
        queryKey: [ReportData.allReports],
      });
      queryClient.invalidateQueries({
        queryKey: [ReportData.allReportsPreview],
      });
      handleModalOpen(ADMIN_MODAL_MESSAGE.banSuccess);
    },
    onError: () => {},
  });

  const postWarning = useMutation<void, AxiosError, number>({
    mutationFn: (id: number) => postWarningUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [UserData.allUser],
      });
      queryClient.invalidateQueries({
        queryKey: [UserData.allUserPreview],
      });
      queryClient.invalidateQueries({
        queryKey: [ReportData.allReports],
      });
      queryClient.invalidateQueries({
        queryKey: [ReportData.allReportsPreview],
      });
      handleModalOpen(ADMIN_MODAL_MESSAGE.banSuccess);
    },
    onError: () => {},
  });

  return { postBan, postWarning };
};
