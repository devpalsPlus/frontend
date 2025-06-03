import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { ADMIN_ROUTE, ROUTES } from '../constants/routes';
import { ReactNode, useEffect } from 'react';
import { useModal } from '../hooks/useModal';
import Modal from '../components/common/modal/Modal';
import { MODAL_MESSAGE } from '../constants/user/modalMessage';
import { useMyProfileInfo } from '../hooks/user/useMyInfo';

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
  const { myData } = useMyProfileInfo();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    console.log(myData);

    const handleStorageChange = () => {
      const authStorage = localStorage.getItem('auth-storage');
      if (!authStorage || !myData) {
        handleModalOpen(MODAL_MESSAGE.needAuth);
        timer = setTimeout(() => {
          logout();
          navigate(ROUTES.main);
        }, 1000);
      }
    };

    if (!isLoggedIn) {
      handleModalOpen(MODAL_MESSAGE.needAuth);
      timer = setTimeout(() => {
        navigate(ROUTES.main);
      }, 1000);
      return;
    }
    if (isLoggedIn && !isAdmin) {
      handleModalOpen(MODAL_MESSAGE.needAuth);
      timer = setTimeout(() => {
        navigate(ROUTES.main);
      }, 1000);
      return;
    }
    if (isLoggedIn && isAdmin && !redirectAdminBool) {
      navigate(ADMIN_ROUTE.admin);
      replace();
      return;
    }

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      if (timer) clearTimeout(timer);
    };
  }, [
    myData,
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
