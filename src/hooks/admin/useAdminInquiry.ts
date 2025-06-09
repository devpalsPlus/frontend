import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteInquiry,
  getInquiryDetail,
  patchInquiryAnswer,
  postInquiryAnswer,
} from '../../api/admin/customerService/Inquiry.api';
import type { InquiryAnswerBody } from '../../models/inquiry';
import { AxiosError } from 'axios';
import { CustomerService } from '../queries/keys';
import type { State } from './useAdminFAQ';
import { useNavigate } from 'react-router-dom';
import { ADMIN_MODAL_MESSAGE } from '../../constants/admin/adminModal';

export const useAdminInquiry = ({
  handleModalOpen,
  id = '',
  handleConfirm,
}: {
  handleModalOpen: (message: string) => void;
  id?: string;
  handleConfirm?: () => void;
}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleButtonState = (state: State, isDeleteApi: boolean = false) => {
    switch (state) {
      case 'success':
        {
          if (!isDeleteApi) {
            handleModalOpen(ADMIN_MODAL_MESSAGE.writeSuccess);
          } else {
            handleConfirm?.();
            handleModalOpen(ADMIN_MODAL_MESSAGE.writeDeleteSuccess);
          }
          const timer = setTimeout(() => {
            if (id) {
              return navigate(`/admin/inquiries/detail/${id}`);
            } else {
              return navigate(-1);
            }
          }, 1000);
          clearTimeout(timer);
        }
        break;
      case 'fail':
        if (!isDeleteApi) {
          handleModalOpen(ADMIN_MODAL_MESSAGE.writeFail);
        } else {
          handleModalOpen(ADMIN_MODAL_MESSAGE.writeDeleteFail);
        }
        break;
      default:
        handleModalOpen(ADMIN_MODAL_MESSAGE.writeError);
        break;
    }
  };

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
      handleButtonState('success');
    },
    onError: () => {
      handleButtonState('fail');
    },
  });

  const patchInquiryAnswerMutate = useMutation<
    void,
    AxiosError,
    InquiryAnswerBody
  >({
    mutationFn: ({ id, answer }: InquiryAnswerBody) =>
      patchInquiryAnswer({ id, answer }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.inquiryDetail, id],
      });
      handleButtonState('success');
    },
    onError: () => {
      handleButtonState('fail');
    },
  });

  const deleteInquiryMutate = useMutation({
    mutationFn: (id: string) => deleteInquiry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.inquiryDetail, id],
      });
      handleButtonState('success', true);
    },
    onError: () => {
      handleButtonState('fail');
    },
  });

  return {
    getInquiryDetailData,
    postInquiryAnswerMutate,
    patchInquiryAnswerMutate,
    deleteInquiryMutate,
  };
};
