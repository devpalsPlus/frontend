import { useCallback } from 'react';

export const useAlert = () => {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []);

  const showConfirm = useCallback((message: string, onConfirm: () => void) => {
    if (window.confirm(message)) {
      onConfirm();
    }
  }, []);

  return { showAlert, showConfirm };
};
