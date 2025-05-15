import { useQuery } from '@tanstack/react-query';
import { getMyInquiries } from '../../api/activityLog.api';
import useAuthStore from '../../store/authStore';
import { ActivityLog } from '../queries/user/keys';

export const useGetMyInquiries = () => {
  const userId = useAuthStore((state) => state.userData?.id);

  const { data: myInquiriesData, isLoading } = useQuery({
    queryKey: [ActivityLog.myInquiries, userId],
    queryFn: () => getMyInquiries(),
  });

  return { myInquiriesData, isLoading };
};
