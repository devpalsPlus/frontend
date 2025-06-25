import { useQuery } from '@tanstack/react-query';
import { Inquiries } from '../queries/keys';
import { getAllInquiries } from '../../api/admin/customerService/inquiry.api';

export const useGetAllInquiries = () => {
  const {
    data: allInquiriesData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [Inquiries.allInquiries],
    queryFn: () => getAllInquiries(),
  });

  return { allInquiriesData, isLoading, isFetching };
};
