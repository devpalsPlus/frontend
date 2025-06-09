import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail } from '../../api/customerService.api';
import { CustomerService } from '../queries/keys';

export const useGetNoticeDetail = (id: string) => {
  const { data: noticeDetailData, isLoading } = useQuery({
    queryKey: [CustomerService.noticeDetail, id],
    queryFn: () => getNoticeDetail(id),
    enabled: !!id,
  });

  if (!id) {
    return { noticeDetail: undefined, isLoading: false };
  }

  return { noticeDetail: noticeDetailData, isLoading };
};
