import { useParams } from 'react-router-dom';
import * as S from './Evaluation.styled';
import useGetCompletedEvaluation from '../../hooks/evaluationHooks/useGetEvaluation';
import EvaluationContent from '../../components/evaluation/EvaluationContent';
import LoadingSpinner from '../../components/common/loadingSpinner/LoadingSpinner';

const Evaluation = () => {
  const { projectId: projectIdParam } = useParams();
  const projectId = Number(projectIdParam);

  const { memberList, isLoading, isFetching } =
    useGetCompletedEvaluation(projectId);

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  if (!memberList.userData.length) {
    return <S.Container>평가할 멤버가 없습니다.</S.Container>;
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
