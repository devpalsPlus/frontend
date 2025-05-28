import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { ADMIN_ROUTE, ROUTES } from '../constants/routes';
import { ReactNode, useEffect } from 'react';
import { useModal } from '../hooks/useModal';
import Modal from '../components/common/modal/Modal';
import { MODAL_MESSAGE } from '../constants/user/modalMessage';

interface ProtectAdminRouteProps {
  children: ReactNode;
}

export default function ProtectAdminRoute({
  children,
}: ProtectAdminRouteProps) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn) ?? false;
  const isAdmin = useAuthStore((state) => state.userData?.admin) ?? false;
  const logout = useAuthStore((state) => state.logout);
  const replace = useAuthStore((state) => state.replace);
  const redirectAdminBool =
    useAuthStore((state) => state.redirectAdmin) || false;
  const navigate = useNavigate();
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();

  useEffect(() => {
    (async () => {
      if (isLoggedIn && isAdmin && !redirectAdminBool) {
        navigate(ADMIN_ROUTE.admin);
        replace();
        return;
      } else if (!isLoggedIn || (!isLoggedIn && !isAdmin)) {
        logout();
        handleModalOpen(MODAL_MESSAGE.isNotLoggedIn);
        setTimeout(() => {
          navigate(ROUTES.main);
        }, 1000);
        return (
          <Modal isOpen={isOpen} onClose={handleModalClose}>
            {message}
          </Modal>
        );
      }
    })();
  }, [
    redirectAdminBool,
    isLoggedIn,
    isAdmin,
    replace,
    navigate,
    logout,
    isOpen,
    message,
    handleModalOpen,
    handleModalClose,
  ]);

  return children;
}
