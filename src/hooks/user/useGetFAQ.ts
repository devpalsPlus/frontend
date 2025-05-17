import { useQuery } from '@tanstack/react-query';
import { getFAQ } from '../../api/customerService.api';
import { CustomerService } from '../queries/user/keys';
import type { SearchKeyword } from '../../models/customerService';

export const useGetFAQ = (keyword: SearchKeyword) => {
  const { data: faqData, isLoading } = useQuery({
    // keyword 조회시 keyword 키 추가
    queryKey: [CustomerService.faq, keyword],
    queryFn: () => getFAQ(keyword),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return { faqData, isLoading };
};
