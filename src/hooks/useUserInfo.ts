import { useQuery } from '@tanstack/react-query';
import { UserInfo } from '../models/userInfo';
import { userInfoKey } from './queries/keys';
import { getUserInfo, getUserJoinedProjectList } from '../api/userpage.api';
import useAuthStore from '../store/authStore';
import { UserJoinedProjectList } from '../models/userProject';

export const useUserProfileInfo = (id: number) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const { data, isLoading } = useQuery<UserInfo>({
    queryKey: [userInfoKey.userProfile, id],
    queryFn: () => getUserInfo(id),
    staleTime: 1 * 60 * 1000,
    enabled: isLoggedIn,
  });

  return { userData: data, isLoading };
};

export const useUserJoinedProjectList = (id: number) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const { data, isLoading } = useQuery<UserJoinedProjectList>({
    queryKey: [userInfoKey.userJoinedList, id],
    queryFn: () => getUserJoinedProjectList(id),
    staleTime: 1 * 60 * 1000,
    enabled: isLoggedIn,
  });

  return { userJoinedProjectListData: data, isLoading };
};
