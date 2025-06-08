import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteInquiry,
  getInquiryDetail,
  postInquiryAnswer,
} from '../../api/admin/customerService/Inquiry.api';
import { InquiryAnswerBody } from '../../models/inquiry';
import { AxiosError } from 'axios';
import { CustomerService } from '../queries/keys';

export const useAdminInquiry = (id: string) => {
  const queryClient = useQueryClient();

  const getInquiryDetailData = useQuery({
    queryKey: [CustomerService.inquiryDetail, id],
    queryFn: () => getInquiryDetail(id),
    enabled: !!id,
  });

  const postInquiryAnswerMutate = useMutation<
    void,
    AxiosError,
    InquiryAnswerBody
  >({
    mutationFn: ({ id, answer }: InquiryAnswerBody) =>
      postInquiryAnswer({ id, answer }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.inquiryDetail, id],
      });
    },
  });

  const patchInquiryAnswerMutate = useMutation<
    void,
    AxiosError,
    InquiryAnswerBody
  >({
    mutationFn: ({ id, answer }: InquiryAnswerBody) =>
      postInquiryAnswer({ id, answer }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.inquiryDetail, id],
      });
    },
  });

  const deleteInquiryMutate = useMutation({
    mutationFn: (id: string) => deleteInquiry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.inquiryDetail, id],
      });
    },
  });

  return {
    getInquiryDetailData,
    postInquiryAnswerMutate,
    patchInquiryAnswerMutate,
    deleteInquiryMutate,
  };
};
