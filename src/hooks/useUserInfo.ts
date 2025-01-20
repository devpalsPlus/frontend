import { useQuery } from '@tanstack/react-query';
import { UserInfo } from '../models/userInfo';
import { userInfoKey } from './queries/keys';
import { getUserInfo } from '../api/userpage.api';

export const useUserProfileInfo = (id: number) => {
  const { data, isLoading } = useQuery<UserInfo>({
    queryKey: [userInfoKey.userProfile, id],
    queryFn: () => getUserInfo(id),
    staleTime: 1 * 60 * 1000,
  });

  return { userData: data, isLoading };
};
