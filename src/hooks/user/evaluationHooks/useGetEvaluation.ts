import { useQuery } from '@tanstack/react-query';
import { getEvaluation } from '../../../api/evaluation.api';
import { ProjectMemberListEval } from '../../queries/user/keys';
import { useEffect } from 'react';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';
import { useNavigate } from 'react-router-dom';

interface useGetCompletedEvaulationProps {
  projectId: number;
  handleModalOpen: (newMessage: string, callback?: () => void) => void;
}

const useGetCompletedEvaluation = ({
  projectId,
  handleModalOpen,
}: useGetCompletedEvaulationProps) => {
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [ProjectMemberListEval.MemberListEval, projectId],
    queryFn: () => getEvaluation(projectId),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (!data) {
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
