import { useQuery } from '@tanstack/react-query';
import { userInfoKey } from '../queries/user/keys';
import useAuthStore from '../../store/authStore';
import type { ApiUserInfo } from '../../models/userInfo';
import { getUserInfo, getUserJoinedProjectList } from '../../api/userpage.api';
import type { ApiSelectUserProject } from '../../models/userProject';

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

export const useUserJoinedProjectList = (id: number) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const { data, isLoading } = useQuery<ApiSelectUserProject>({
    queryKey: [userInfoKey.userJoinedList, id],
    queryFn: () => getUserJoinedProjectList(id),
    staleTime: 1 * 60 * 1000,
    enabled: isLoggedIn,
  });

  return { userJoinedProjectListData: data?.data, isLoading };
};
