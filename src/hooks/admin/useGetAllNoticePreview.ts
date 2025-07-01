import { useQuery } from '@tanstack/react-query';
import { CustomerService } from '../queries/keys';
import { getNoticePreview } from '../../api/customerService.api';

export const useGetNoticePreview = () => {
  const {
    data: noticeData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [CustomerService.noticePreview],
    queryFn: () => getNoticePreview(),
    select: (notice) => notice.notices.slice(0, 5),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return { noticeData, isLoading, isFetching };
};
