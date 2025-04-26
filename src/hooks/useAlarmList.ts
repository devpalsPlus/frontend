import { useQuery } from '@tanstack/react-query';
import { AlarmList } from './queries/keys';
import { getAlarmList } from '../api/alarm.api';
import useAuthStore from '../store/authStore';

const useAlarmList = () => {
  const userId = useAuthStore((state) => state.userData?.id);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [AlarmList.myAlarmList, userId],
    queryFn: () => getAlarmList(),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });

  return { data, isLoading, isFetching };
};

export default useAlarmList;
