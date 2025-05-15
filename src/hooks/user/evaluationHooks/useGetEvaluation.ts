import { useQuery } from '@tanstack/react-query';
import { getEvaluation } from '../../../api/evaluation.api';
import { ProjectMemberListEval } from '../../queries/user/keys';

const useGetCompletedEvaluation = (id: number) => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [ProjectMemberListEval.MemberListEval, id],
    queryFn: () => getEvaluation(id),
    staleTime: 1000 * 60 * 5,
  });

  return {
    memberList: data,
    isLoading,
    isFetching,
    isError,
  };
};

export default useGetCompletedEvaluation;
