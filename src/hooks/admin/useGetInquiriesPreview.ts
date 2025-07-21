import { useQuery } from '@tanstack/react-query';
import { Inquiries } from '../queries/keys';
import { getInquiriesPreview } from '../../api/admin/customerService/inquiry.api';

export const useGetInquiriesPreview = () => {
  const {
    data: allInquiriesPreviewData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [Inquiries.inquiriesPreview],
    queryFn: () => getInquiriesPreview(),
    select: (data) => data.slice(0, 5),
  });

  return { allInquiriesPreviewData, isLoading, isFetching };
};
