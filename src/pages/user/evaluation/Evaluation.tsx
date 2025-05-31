import { useLocation, useParams } from 'react-router-dom';
import * as S from './Evaluation.styled';
import useGetCompletedEvaluation from '../../../hooks/user/evaluationHooks/useGetEvaluation';
import LoadingSpinner from '../../../components/common/loadingSpinner/LoadingSpinner';
import EvaluationContent from '../../../components/user/evaluation/EvaluationContent';
import Modal from '../../../components/common/modal/Modal';
import { useModal } from '../../../hooks/useModal';

const Evaluation = () => {
  const { projectId: projectIdParam } = useParams();
  const projectId = Number(projectIdParam);
  const location = useLocation();
  const isAllEvaluated = location.state as boolean;

  const { isOpen, message, handleModalOpen, handleModalClose, handleConfirm } =
    useModal();

  const { memberList, isLoading, isFetching } = useGetCompletedEvaluation({
    projectId,
    handleModalOpen,
  });

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <S.Container>
        <EvaluationContent
          projectId={projectId}
          projectName={memberList.projectName}
          memberList={memberList.userData!}
          isAllEvaluated={isAllEvaluated}
        />
      </S.Container>
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
        {message}
      </Modal>
    </>
  );
};

export default Evaluation;
