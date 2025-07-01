import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../../../../constants/routes';
import { useModal } from '../../../../../hooks/useModal';
import Modal from '../../../../common/modal/Modal';
import { MODAL_MESSAGE } from '../../../../../constants/user/modalMessage';
import { useGithubLink } from '../../../../../hooks/user/useMyInfo';

export default function ProfileGithubSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { patchGithubLinkMutate } = useGithubLink(handleModalOpen);

  useEffect(() => {
    (async () => {
      const githubUrl = searchParams.get('githubUrl');

      if (githubUrl) {
        patchGithubLinkMutate(githubUrl);
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
  }, [searchParams, handleModalOpen, navigate, patchGithubLinkMutate]);

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      {message}
    </Modal>
  );
}
