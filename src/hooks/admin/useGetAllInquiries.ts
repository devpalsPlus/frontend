import { useQuery } from '@tanstack/react-query';
import { getAllInquiries } from '../../api/activityLog.api';
import { ActivityLog } from '../queries/user/keys';

export const useGetAllInquiries = () => {
  const { data: allInquiriesData, isLoading } = useQuery({
    queryKey: [ActivityLog.allInquiries],
    queryFn: () => getAllInquiries(),
  });

  return { allInquiriesData, isLoading };
};
