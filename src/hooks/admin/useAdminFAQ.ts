import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deleteFAQ,
  postFAQ,
  putFAQ,
} from '../../api/admin/customerService/FAQ.api';
import type { WriteBody } from '../../models/customerService';
import { AxiosError } from 'axios';

export const useAdminFAQ = () => {
  const queryClient = useQueryClient();

  const postFAQMutate = useMutation<void, AxiosError, WriteBody>({
    mutationFn: (formData: WriteBody) => postFAQ(formData),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const putFAQMutate = useMutation<
    void,
    AxiosError,
    { id: number; formData: WriteBody }
  >({
    mutationFn: ({ id, formData }) => putFAQ({ id, formData }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const deleteFAQMutate = useMutation<void, AxiosError, number>({
    mutationFn: (id: number) => deleteFAQ(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return { postFAQMutate, putFAQMutate, deleteFAQMutate };
};
