import { useQuery } from '@tanstack/react-query';
import useAuthStore from '../../store/authStore';
import { ApiUserInfo } from '../../models/userInfo';
import { getUserInfo } from '../../api/userpage.api';
import { userInfoKey } from '../queries/keys';

const useGetUserInfo = (id: number) => {
  const isLoggedIn = useAuthStore.getState().isLoggedIn;

  const { data, isLoading, isFetching } = useQuery<ApiUserInfo>({
    queryKey: [userInfoKey.userProfile, id],
    queryFn: () => getUserInfo(id),
    staleTime: 1 * 60 * 1000,
    enabled: isLoggedIn,
  });

  return { userData: data?.data, isLoading, isFetching };
};

export default useGetUserInfo;
