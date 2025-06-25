import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../../../../constants/routes';
import { useModal } from '../../../../../hooks/useModal';
import Modal from '../../../../common/modal/Modal';
import { MODAL_MESSAGE } from '../../../../../constants/user/modalMessage';

export default function ProfileGithubSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();

  useEffect(() => {
    (async () => {
      const githubUrl = searchParams.get('githubUrl');
      console.log(githubUrl);
      if (githubUrl) {
        handleModalOpen(MODAL_MESSAGE.githubProfileSuccess);
        setTimeout(() => {
          navigate(`${ROUTES.mypage}/${ROUTES.mypageEdit}`, {
            state: { githubUrl },
          });
        }, 1000);
      } else {
        handleModalOpen(MODAL_MESSAGE.githubProfileFail);
        setTimeout(() => {
          navigate(`${ROUTES.mypage}/${ROUTES.mypageEdit}`);
        }, 1000);
      }
    })();
  }, [searchParams, handleModalOpen, navigate]);

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      {message}
    </Modal>
  );
}
