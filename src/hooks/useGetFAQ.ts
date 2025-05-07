import { useQuery } from '@tanstack/react-query';
import { getFAQ } from '../api/customerService.api';
import { CustomerService } from './queries/keys';

export const useGetFAQ = () => {
  const { data: faqData, isLoading } = useQuery({
    // keyword 조회시 keyword 키 추가
    queryKey: [CustomerService.faq],
    queryFn: () => getFAQ(),
  });

  return { faqData, isLoading };
};
