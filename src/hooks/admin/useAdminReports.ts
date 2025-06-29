import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ReportData } from '../queries/keys';
import { ADMIN_MODAL_MESSAGE } from '../../constants/admin/adminModal';
import { postDeleteReport } from '../../api/admin/report.api';

interface useAdminReportsProps {
  handleModalOpen: (message: string) => void;
}

export const useAdminReports = ({ handleModalOpen }: useAdminReportsProps) => {
  const queryClient = useQueryClient();

  const postDelete = useMutation<void, AxiosError, number>({
    mutationFn: (id: number) => postDeleteReport(id),
    onSuccess: () => {
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

  return { postDelete };
};
