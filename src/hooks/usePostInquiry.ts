import { ActivityLog } from './queries/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postInquiry } from '../api/inquiry.api';
import { AxiosError } from 'axios';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export const usePostInquiry = (pathname: string) => {
  const userId = useAuthStore((state) => state.userData?.id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutate = useMutation<void, AxiosError, FormData>({
    mutationFn: (formData) => postInquiry(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ActivityLog.myInquiries, userId],
      });
      navigate(pathname);
    },
  });

  return mutate;
};
