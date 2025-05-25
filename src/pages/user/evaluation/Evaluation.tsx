import { useParams } from 'react-router-dom';
import * as S from './Evaluation.styled';
import useGetCompletedEvaluation from '../../../hooks/user/evaluationHooks/useGetEvaluation';
import LoadingSpinner from '../../../components/common/loadingSpinner/LoadingSpinner';
import EvaluationContent from '../../../components/user/evaluation/EvaluationContent';
import Modal from '../../../components/common/modal/Modal';
import { useModal } from '../../../hooks/useModal';

const Evaluation = () => {
  const { projectId: projectIdParam } = useParams();
  const projectId = Number(projectIdParam);
  const { isOpen, message, handleModalOpen, handleModalClose, handleConfirm } =
    useModal();

  const { memberList, isLoading, isFetching } = useGetCompletedEvaluation({
    projectId,
    handleModalOpen,
  });

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  if (!memberList.userData.length) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
        {message}
      </Modal>
    );
  }

  return (
    <S.Container>
      <EvaluationContent
        projectId={projectId}
        projectName={memberList.projectName}
        memberList={memberList.userData!}
      />
    </S.Container>
  );
};

export default Evaluation;
