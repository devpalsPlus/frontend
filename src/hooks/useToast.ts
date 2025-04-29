import { useContext } from 'react';
import { ToastContext } from '../components/common/Toast/ToastContext';

export const useToast = () => {
  const { addToast, removeToast } = useContext(ToastContext);
  return { showToast: addToast, hideToast: removeToast };
};
