import { useQuery } from '@tanstack/react-query';
import { getEvaluation } from '../../../api/evaluation.api';
import { ProjectMemberListEval } from '../../queries/user/keys';
import { useEffect } from 'react';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';
import { useNavigate } from 'react-router-dom';

interface useGetCompletedEvaluationProps {
  projectId: number;
  handleModalOpen: (newMessage: string, callback?: () => void) => void;
}

const useGetCompletedEvaluation = ({
  projectId,
  handleModalOpen,
}: useGetCompletedEvaluationProps) => {
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [ProjectMemberListEval.MemberListEval, projectId],
    queryFn: () => getEvaluation(projectId),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data && (!data.userData || data.userData.length === 0)) {
      handleModalOpen(MODAL_MESSAGE.noMemberToEvaluate, () => navigate(-1));
    }
  }, [data, handleModalOpen, navigate]);

  return {
    memberList: data,
    isLoading,
    isFetching,
    isError,
  };
};

export default useGetCompletedEvaluation;
