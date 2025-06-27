import { useQuery } from '@tanstack/react-query';
import { Inquiries } from '../queries/keys';
import { getAllInquiries } from '../../api/admin/customerService/inquiry.api';
import { AdminInquiryChangeSearchParams } from '../../models/inquiry';

export const useGetAllInquiries = (
  childSearchParams: AdminInquiryChangeSearchParams
) => {
  const {
    data: allInquiriesData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [Inquiries.allInquiries, childSearchParams],
    queryFn: () => getAllInquiries(childSearchParams),
  });

  return { allInquiriesData, isLoading, isFetching };
};
