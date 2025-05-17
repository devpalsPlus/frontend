import { useQuery } from '@tanstack/react-query';
import { userInfoKey } from '../queries/user/keys';
import useAuthStore from '../../store/authStore';
import type { ApiUserInfo } from '../../models/userInfo';
import { getUserInfo } from '../../api/userpage.api';

export const useUserProfileInfo = (id: number) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const { data, isLoading } = useQuery<ApiUserInfo>({
    queryKey: [userInfoKey.userProfile, id],
    queryFn: () => getUserInfo(id),
    staleTime: 1 * 60 * 1000,
    enabled: isLoggedIn,
  });

  return { userData: data?.data, isLoading };
};
