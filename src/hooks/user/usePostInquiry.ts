import { ActivityLog } from '../queries/keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { postInquiry } from '../../api/inquiry.api';
import { INQUIRY_MESSAGE } from '../../constants/user/customerService';

export const usePostInquiry = (
  handleModalOpen: (message: string) => void,
  pathname: string = ''
) => {
  const userId = useAuthStore.getState().userData?.id;
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
