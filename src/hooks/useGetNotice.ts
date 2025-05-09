import { useQuery } from '@tanstack/react-query';
import type { SearchKeyword } from '../models/customerService';
import { getNotice } from '../api/customerService.api';
import { CustomerService } from './queries/keys';

export const useGetNotice = (keyword: SearchKeyword) => {
  const { data: noticeData, isLoading } = useQuery({
    queryKey: [CustomerService.notice, keyword],
    queryFn: () => getNotice(keyword),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return { noticeData, isLoading };
};
