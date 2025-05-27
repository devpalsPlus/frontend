import { useQuery } from '@tanstack/react-query';
import { AlarmList } from '../queries/user/keys';
import { getAlarmList } from '../../api/alarm.api';
import useAuthStore from '../../store/authStore';

const useAlarmList = () => {
  const userId = useAuthStore.getState().userData?.id;

  const {
    data: alarmListData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [AlarmList.myAlarmList, userId],
    queryFn: () => getAlarmList(),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });

  return { alarmListData, isLoading, isFetching };
};

export default useAlarmList;
