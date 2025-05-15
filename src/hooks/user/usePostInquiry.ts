import { ActivityLog } from '../queries/user/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postInquiry } from '../api/inquiry.api';
import { AxiosError } from 'axios';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { INQUIRY_MESSAGE } from '../constants/customerService';

export const usePostInquiry = (
  handleModalOpen: (message: string) => void,
  pathname: string = ''
) => {
  const userId = useAuthStore((state) => state.userData?.id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutate = useMutation<void, AxiosError, FormData>({
    mutationFn: (formData) => postInquiry(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ActivityLog.myInquiries, userId],
      });
      setTimeout(() => {
        if (pathname === '' || !pathname) {
          navigate(-1);
        } else {
          navigate(pathname);
        }
      }, 1000);

      handleModalOpen(INQUIRY_MESSAGE.inquiredSuccess);
    },
    onError: () => {
      handleModalOpen(INQUIRY_MESSAGE.inquiredError);
    },
  });

  return mutate;
};
