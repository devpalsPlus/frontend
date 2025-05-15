import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchAlarm } from '../api/alarm.api';
import { AlarmList } from '../queries/user/keys';
import useAuthStore from '../store/authStore';

export const useAlarmPatch = () => {
  const userId = useAuthStore((state) => state.userData?.id);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => patchAlarm(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [AlarmList.myAlarmList, userId],
      });
    },
  });

  return mutation;
};
