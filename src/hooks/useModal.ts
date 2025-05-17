import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [onConfirm, setOnConfirm] = useState<(() => void) | null>(null);

  const handleModalOpen = useCallback(
    (newMessage: string, callback?: () => void) => {
      setMessage(newMessage);
      setIsOpen(true);
      setOnConfirm(() => callback ?? null);
    },
    []
  );

  const handleModalClose = useCallback(() => {
    setMessage('');
    setIsOpen(false);
    setOnConfirm(null);
  }, []);

  const handleConfirm = useCallback(() => {
    if (onConfirm) onConfirm();
    handleModalClose();
  }, [onConfirm, handleModalClose]);

  return {
    isOpen,
    message,
    setIsOpen,
    handleModalClose,
    handleModalOpen,
    handleConfirm,
  };
};
