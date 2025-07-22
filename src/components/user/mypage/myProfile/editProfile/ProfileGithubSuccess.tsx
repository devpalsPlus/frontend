import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useModal } from '../../../../../hooks/useModal';
import Modal from '../../../../common/modal/Modal';
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
      }
    })();
  }, [searchParams, handleModalOpen, navigate, patchGithubLinkMutate]);

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      {message}
    </Modal>
  );
}
