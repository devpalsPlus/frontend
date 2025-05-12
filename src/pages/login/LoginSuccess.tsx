import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { ROUTES } from '../../constants/routes';
import * as S from './Login.styled';
import { Spinner } from '../../components/common/loadingSpinner/LoadingSpinner.styled';
import Modal from '../../components/common/modal/Modal';
import { useModal } from '../../hooks/useModal';
import { AUTH_MESSAGE } from '../../constants/authConstants';

function LoginSuccess() {
  const [searchParams] = useSearchParams();
  const { storeLogin } = useAuthStore.getState();
  const navigate = useNavigate();
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');

    if (accessToken) {
      storeLogin(accessToken);
      localStorage.setItem('accessToken', accessToken);
      navigate(ROUTES.main);
    } else {
      handleModalOpen(AUTH_MESSAGE.isNotToken);
      navigate(ROUTES.login);
    }
  }, [searchParams, storeLogin, handleModalOpen, navigate]);

  return (
    <S.LoginSuccessContainer>
      <Spinner />
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.LoginSuccessContainer>
  );
}

export default LoginSuccess;
