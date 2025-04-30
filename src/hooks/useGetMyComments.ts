import { useQuery } from '@tanstack/react-query';
import { getMyComments } from '../api/activityLog.api';
import useAuthStore from '../store/authStore';
import { ActivityLog } from './queries/keys';

export const useGetMyComments = () => {
  const userId = useAuthStore((state) => state.userData?.id);

  const { data: myCommentsData, isLoading } = useQuery({
    queryKey: [ActivityLog.myComments, userId],
    queryFn: () => getMyComments(),
  });

  return { myCommentsData, isLoading };
};
