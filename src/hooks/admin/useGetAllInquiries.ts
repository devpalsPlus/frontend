import { useQuery } from '@tanstack/react-query';
import { getAllInquiries } from '../../api/activityLog.api';
import { Inquiries } from '../queries/user/keys';

export const useGetAllInquiries = () => {
  const {
    data: allInquiriesData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [Inquiries.allInquiries],
    queryFn: () => getAllInquiries(),
    select: (allInquiries) => allInquiries.slice(0, 5),
  });

  return { allInquiriesData, isLoading, isFetching };
};
