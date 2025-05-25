import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { ROUTES } from '../../constants/user/routes';
import * as S from './Login.styled';
import { Spinner } from '../../components/common/loadingSpinner/LoadingSpinner.styled';
import Modal from '../../components/common/modal/Modal';
import { useModal } from '../../hooks/useModal';
import { AUTH_MESSAGE } from '../../constants/user/authConstants';
import { getOauthLogin } from '../../api/auth.api';

export default function LoginApi() {
  const login = useAuthStore.getState().login;
  const navigate = useNavigate();
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();

  useEffect(() => {
    (async () => {
      const result = await getOauthLogin();
      const { data, user } = result;
      const { accessToken } = data;

      if (accessToken) {
        login(accessToken, user);
        navigate(ROUTES.main);
      } else {
        handleModalOpen(AUTH_MESSAGE.isNotToken);
        setTimeout(() => {
          navigate(ROUTES.login);
        }, 1000);
      }
    })();
  }, [login, handleModalOpen, navigate]);

  return (
    <S.LoginSuccessContainer>
      <Spinner />
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.LoginSuccessContainer>
  );
}
