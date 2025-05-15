import { useQuery } from '@tanstack/react-query';
<<<<<<< HEAD
=======
import { getEvaluation } from '../../../api/evaluation.api';
>>>>>>> 4069f4a (chore: 디렉토리 변경에 따른  경로수정)
import { ProjectMemberListEval } from '../../queries/user/keys';
import { getEvaluation } from '../../../api/evaluation.api';

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
