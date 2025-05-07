import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleModalOpen = useCallback((newMessage: string) => {
    setMessage(newMessage);
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setMessage('');
    setIsOpen(false);
  }, []);

  const handleOpenReportModal = () => {
    setIsOpen(true);
  };

  const handleCloseReportModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    message,
    setIsOpen,
    handleModalClose,
    handleModalOpen,
    handleOpenReportModal,
    handleCloseReportModal,
  };
};
