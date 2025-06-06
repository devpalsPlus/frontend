import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteFAQ,
  getFAQDetail,
  postFAQ,
  putFAQ,
} from '../../api/admin/customerService/FAQ.api';
import type { WriteBody } from '../../models/customerService';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ADMIN_MODAL_MESSAGE } from '../../constants/admin/adminModal';
import { CustomerService } from '../queries/user/keys';

type State = 'success' | 'fail';

export const useAdminFAQ = ({
  handleModalOpen,
  formDefault,
  pathname,
  id = '',
  handleConfirm,
}: {
  handleModalOpen: (message: string) => void;
  formDefault?: () => void;
  pathname: string;
  id?: string;
  handleConfirm?: () => void;
}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleButtonState = (state: State, isDeleteApi: boolean = false) => {
    switch (state) {
      case 'success':
        if (!isDeleteApi) {
          handleModalOpen(ADMIN_MODAL_MESSAGE.writeSuccess);
          formDefault?.();
        } else {
          handleConfirm?.();
          handleModalOpen(ADMIN_MODAL_MESSAGE.writeDeleteSuccess);
        }
        setTimeout(() => {
          if (pathname) {
            return navigate(pathname);
          } else {
            return navigate(-1);
          }
        }, 1000);
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

  const getFAQDetailData = useQuery({
    queryKey: [CustomerService.faq, id],
    queryFn: () => getFAQDetail(id),
    enabled: !!id,
  });

  const postFAQMutate = useMutation<void, AxiosError, WriteBody>({
    mutationFn: (formData: WriteBody) => postFAQ(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.faq],
      });
      handleButtonState('success');
    },
    onError: () => {
      handleButtonState('fail');
    },
  });

  const putFAQMutate = useMutation<
    void,
    AxiosError,
    { id: string; formDataObj: WriteBody }
  >({
    mutationFn: ({ id, formDataObj: formData }) => putFAQ({ id, formData }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.faq],
      });
      handleButtonState('success');
    },
    onError: () => {
      handleButtonState('fail');
    },
  });

  const deleteFAQMutate = useMutation<void, AxiosError, string>({
    mutationFn: (id: string) => deleteFAQ(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.faq],
      });
      handleButtonState('success', true);
    },
    onError: () => {
      handleButtonState('fail');
    },
  });

  return { getFAQDetailData, postFAQMutate, putFAQMutate, deleteFAQMutate };
};
