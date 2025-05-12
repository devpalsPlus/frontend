import { useParams } from 'react-router-dom';
import * as S from './Evaluation.styled';
import useGetCompletedEvaluation from '../../hooks/evaluationHooks/useGetEvaluation';
import EvaluationContent from '../../components/evaluation/EvaluationContent';

const Evaluation = () => {
  const projectId = Number(useParams().projectId);
  const { memberList, isLoading, isFetching } =
    useGetCompletedEvaluation(projectId);

  if (isLoading || isFetching) {
    return;
  }

  if (!memberList) {
    return <S.Container>평가할 멤버가 없습니다.</S.Container>;
  }

  return (
    <S.Container>
      <EvaluationContent projectId={projectId} memberList={memberList!} />
    </S.Container>
  );
};

export default Evaluation;
