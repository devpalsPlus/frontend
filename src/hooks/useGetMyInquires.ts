import { useQuery } from '@tanstack/react-query';
import { getMyInquiries } from '../api/activityLog.api';
import useAuthStore from '../store/authStore';
import { ActivityLog } from './queries/keys';

export const useGetMyInquires = () => {
  const userId = useAuthStore((state) => state.userData?.id);

  const { data: myInquiresData, isLoading } = useQuery({
    queryKey: [ActivityLog.myInquiries, userId],
    queryFn: () => getMyInquiries(),
  });

  return { myCommentsData: myInquiresData, isLoading };
};
