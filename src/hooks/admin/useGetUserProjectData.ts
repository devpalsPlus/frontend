import { useQuery } from '@tanstack/react-query';
import useAuthStore from '../../store/authStore';
import { ProjectListKey, UserData } from '../queries/keys';
import { getUserProjectData } from '../../api/admin/user.api';
import { useLocation } from 'react-router-dom';
import { getMyAppliedStatusList } from '../../api/mypage.api';
import type { AppliedProject } from '../../models/userProject';

const useGetUserProjectData = (userId: number) => {
  const isAdmin = useLocation().pathname.includes('admin');
  const isLoggedIn = useAuthStore.getState().isLoggedIn;

  const { data, isLoading, isFetching } = useQuery<AppliedProject[]>({
    queryKey: isAdmin
      ? [UserData.userJoinedProjectList, userId]
      : [ProjectListKey.myAppliedStatusList, userId],
    queryFn: () =>
      isAdmin ? getUserProjectData(userId) : getMyAppliedStatusList(),
    staleTime: 1 * 60 * 1000,
    enabled: isAdmin ? !!userId : isLoggedIn,
  });

  return { userData: data, isLoading, isFetching };
};

export default useGetUserProjectData;
