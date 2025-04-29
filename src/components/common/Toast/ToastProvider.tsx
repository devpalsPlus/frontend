import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { ToastContext, ToastMessage } from './ToastContext';
import ToastContainer from './ToastContainer';

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((content: string, duration = 4000) => {
    const id = Date.now().toString() + Math.random();
    setToasts((prev) => [...prev, { id, content, duration }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    if (toasts.length >= 4) {
      const oldestId = toasts[0].id;
      removeToast(oldestId);
    }
  }, [toasts, removeToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};
