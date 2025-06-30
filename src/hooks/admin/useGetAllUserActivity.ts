import { useQuery } from '@tanstack/react-query';
import { ActivityLog, UserData } from '../queries/keys';
import { getUserActivityData } from '../../api/admin/userActivity.api';
import { getMyComments, getMyInquiries } from '../../api/activityLog.api';
import useAuthStore from '../../store/authStore';
import type { MyComments, MyInquiries } from '../../models/activityLog';
import { useLocation } from 'react-router-dom';

export function useGetUserActivity(
  userId: number,
  type: 'comments' | 'inquiries'
) {
  const userLoginId = useAuthStore.getState().userData?.id;
  const { pathname } = useLocation();
  const isAdmin = pathname.includes('/admin');

  const getQueryKey = () => {
    if (isAdmin) return [UserData.userActivity, userId, type];
    return [
      type === 'comments' ? ActivityLog.myComments : ActivityLog.myInquiries,
      userLoginId,
    ];
  };

  const getQueryFn = async () => {
    if (isAdmin) {
      const response = await getUserActivityData(userId);
      return type === 'comments'
        ? response.data.comments
        : response.data.inquiries;
    }
    if (type === 'comments') {
      return await getMyComments();
    }
    return await getMyInquiries();
  };

  const { data, isLoading, isFetching } = useQuery<
    MyComments[] | MyInquiries[]
  >({
    queryKey: getQueryKey(),
    queryFn: getQueryFn,
    staleTime: 60 * 1000,
    enabled: isAdmin ? !!userId : true,
  });

  return {
    userActivityData: data,
    isLoading,
    isFetching,
  };
}

export default useGetUserActivity;
