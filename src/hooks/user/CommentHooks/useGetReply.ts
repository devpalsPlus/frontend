import { useQuery } from '@tanstack/react-query';
import { ProjectReplyList } from '../../queries/user/keys';
import { getReply } from '../../api/reply.api';

const useGetReply = (projectId: number, commentId: number) => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [ProjectReplyList.commentReply, commentId, projectId],
    queryFn: () => getReply(projectId, commentId),
    staleTime: 1000 * 60 * 5,
  });

  return {
    getReplyList: data,
    isLoading,
    isFetching,
    isError,
  };
};

export default useGetReply;
