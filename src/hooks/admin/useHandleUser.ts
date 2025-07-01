import { useAdminReports } from './useAdminReports';
import { useHandleUserApi } from './useHandleUserApi';

interface useBanUserProps {
  handleModalOpen: (message: string) => void;
  handleConfirm: () => void;
}

export const useHandleUser = ({
  handleModalOpen,
  handleConfirm,
}: useBanUserProps) => {
  const { postBan, postWarning } = useHandleUserApi({
    handleModalOpen,
    handleConfirm,
  });

  const { postDelete } = useAdminReports({ handleModalOpen });

  const handleClickBanButton = (
    e: React.MouseEvent<HTMLButtonElement>,
    userId: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm('정말 강퇴 하시겠습니까?')) {
      postBan.mutate(userId);
    }
  };

  const handleClickWarningButton = (
    e: React.MouseEvent<HTMLButtonElement>,
    userId: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm('정말 경고 하시겠습니까?')) {
      postWarning.mutate(userId);
    }
  };

  const handleClickDeleteButton = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    postDelete.mutate(id);
  };

  return {
    handleClickBanButton,
    handleClickWarningButton,
    handleClickDeleteButton,
  };
};
