import { useQuery } from '@tanstack/react-query';
import { ApiUserInfo } from '../../models/userInfo';
import { getUserInfo } from '../../api/userpage.api';
import { userInfoKey } from '../queries/keys';

const useGetUserInfo = (id: number) => {
  const { data, isLoading, isFetching } = useQuery<ApiUserInfo>({
    queryKey: [userInfoKey.userProfile, id],
    queryFn: () => getUserInfo(id),
    staleTime: 1 * 60 * 1000,
    enabled: !!id,
  });

  return { userData: data?.data, isLoading, isFetching };
};

export default useGetUserInfo;
