import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AlarmList, userInfoKey } from './queries/keys';
import { getAlarmList } from '../api/alarm.api';

const useAlarmList = () => {
  const queryClient = useQueryClient();
  const userInfo = queryClient.getQueryData(userInfoKey.userProfile) as
    | { id: number }
    | undefined;
  const userId = userInfo?.id;

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [AlarmList.myAlarmList, userId],
    queryFn: () => getAlarmList(),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });

  return { data, isLoading, isFetching };
};

export default useAlarmList;
