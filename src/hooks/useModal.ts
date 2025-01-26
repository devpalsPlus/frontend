import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const handleModalOpen = (newMessage: string) => {
    setMessage(newMessage);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setMessage('');
    setIsOpen(false);
  };

  return { isOpen, message, setIsOpen, handleModalClose, handleModalOpen };
};
