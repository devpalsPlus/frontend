import { useQuery } from '@tanstack/react-query';
import { getComment } from '../../api/comment.api';
import { ProjectCommentList } from '../queries/keys';

const useGetComment = (id: number) => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [ProjectCommentList.projectComment, id],
    queryFn: async () => await getComment(id),
    staleTime: 1000 * 60 * 5,
  });

  return {
    getCommentList: data,
    isLoading,
    isFetching,
    isError,
  };
};

export default useGetComment;
