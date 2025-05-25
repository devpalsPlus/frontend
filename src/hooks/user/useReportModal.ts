import { useState } from 'react';

export const useReportModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenReportModal = () => {
    setIsOpen(true);
  };

  const handleCloseReportModal = () => {
    setIsOpen(false);
  };

  return {
    handleOpenReportModal,
    handleCloseReportModal,
    isOpen,
  };
};

export default useReportModal;
