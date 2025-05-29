import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { ADMIN_ROUTE } from '../constants/routes';
import { ReactNode, useEffect } from 'react';
import { useModal } from '../hooks/useModal';
import Modal from '../components/common/modal/Modal';

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
    if (isLoggedIn && isAdmin && !redirectAdminBool) {
      navigate(ADMIN_ROUTE.admin);
      replace();
      return;
    }
  }, [
    redirectAdminBool,
    isLoggedIn,
    isAdmin,
    replace,
    navigate,
    logout,
    handleModalOpen,
  ]);

  return (
    <>
      {children}
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </>
  );
}
