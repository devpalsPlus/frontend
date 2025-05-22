import { PropsWithChildren, useEffect, useState } from 'react';
import useAuthStore from '../../store/authStore';
import { Navigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import Modal from './modal/Modal';
import { MODAL_MESSAGE } from '../../constants/user/modalMessage';
interface ProtectRouteProps extends PropsWithChildren {
  redirectUrl: string;
}

const ProtectRoute = ({ children, redirectUrl }: ProtectRouteProps) => {
  const isLoggedIn = useAuthStore.getState().isLoggedIn;
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoggedIn) {
      handleModalOpen(MODAL_MESSAGE.isNotLoggedIn);
      const timer = setTimeout(() => setShouldRedirect(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShouldRedirect(false);
    }
  }, [isLoggedIn, handleModalOpen]);

  if (!isLoggedIn) {
    if (shouldRedirect) {
      return <Navigate to={redirectUrl} replace />;
    }

    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    );
  }

  return <>{children}</>;
};

export default ProtectRoute;
