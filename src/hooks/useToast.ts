import { useState } from 'react';

const useToast = () => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const handleToastOpen = () => {
    setIsToastOpen(true);
  };

  const handleToastClose = () => {
    setIsToastOpen(false);
  };

  return {
    isToastOpen,
    handleToastClose,
    handleToastOpen,
  };
};

export default useToast;
