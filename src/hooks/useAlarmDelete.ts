import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAlarm } from '../api/alarm.api';
import { AlarmList } from './queries/keys';
import useAuthStore from '../store/authStore';

export const useAlarmDelete = () => {
  const userId = useAuthStore((state) => state.userData?.id);
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, number, unknown>({
    mutationFn: (id: number) => deleteAlarm(id),
    onSuccess: () => {
      if (!userId) return;
      queryClient.invalidateQueries({
        queryKey: [AlarmList.myAlarmList, userId],
      });
    },
  });

  return mutation;
};
