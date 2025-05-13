import { useQuery } from '@tanstack/react-query';
import type { NoticeSearch } from '../models/customerService';
import { getNotice } from '../api/customerService.api';
import { CustomerService } from './queries/keys';

export const useGetNotice = (searchProperty: NoticeSearch) => {
  const { keyword, page } = searchProperty;

  const { data: noticeData, isLoading } = useQuery({
    queryKey: [CustomerService.notice, keyword, page],
    queryFn: () => getNotice(searchProperty),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return { noticeData, isLoading };
};
