import { useQuery } from '@tanstack/react-query';
import { Banners } from '../queries/keys';
import { getBannerList } from '../../api/admin/banner.api';

export const useGetAllBannerList = () => {
  const {
    data: allBannersData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [Banners.allBanners],
    queryFn: () => getBannerList(),
  });

  return { allBannersData, isLoading, isFetching, refetch };
};
