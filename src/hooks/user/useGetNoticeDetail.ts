import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail } from '../../api/customerService.api';
import { CustomerService } from '../queries/user/keys';

export const useGetNoticeDetail = (id: string) => {
  const { data: noticeDetailData, isLoading } = useQuery({
    queryKey: [CustomerService.noticeDetail, id],
    queryFn: () => getNoticeDetail(id),
  });

  return { noticeDetail: noticeDetailData, isLoading };
};
