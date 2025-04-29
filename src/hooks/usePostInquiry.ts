import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postInquiry } from '../api/inquiry.api';
import { AxiosError } from 'axios';

export const usePostInquiry = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation<void, AxiosError, FormData>({
    mutationFn: (formData) => postInquiry(formData),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
