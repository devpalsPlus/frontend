import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deleteNotice,
  postNotice,
  putNotice,
} from '../../api/admin/customerService/Notice.api';
import { AxiosError } from 'axios';
import { CustomerService } from '../queries/user/keys';
import { useNavigate } from 'react-router-dom';
import { ADMIN_MODAL_MESSAGE } from '../../constants/admin/adminModal';
import { WriteBody } from '../../models/customerService';

type State = 'success' | 'fail';

export const useAdminNotice = (
  handleModalOpen: (message: string) => void,
  pathname: string
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleButtonState = (state: State, isDeleteApi: boolean = false) => {
    switch (state) {
      case 'success':
        if (!isDeleteApi) {
          handleModalOpen(ADMIN_MODAL_MESSAGE.writeSuccess);
        } else {
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

  const postNoticeMutate = useMutation<void, AxiosError, WriteBody>({
    mutationFn: (formData) => postNotice(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.notice],
      });
      handleButtonState('success');
    },
    onError: () => {
      handleButtonState('fail');
    },
  });

  const putNoticeMutate = useMutation<
    void,
    AxiosError,
    { id: number; formData: WriteBody }
  >({
    mutationFn: ({ id, formData }: { id: number; formData: WriteBody }) =>
      putNotice(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.notice],
      });
      handleButtonState('success');
    },
    onError: () => {
      handleButtonState('fail');
    },
  });

  const deleteNoticeMutate = useMutation<void, AxiosError, number>({
    mutationFn: (id) => deleteNotice(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CustomerService.notice],
      });
      handleButtonState('success', true);
    },
    onError: () => {
      handleButtonState('fail', true);
    },
  });

  return { postNoticeMutate, putNoticeMutate, deleteNoticeMutate };
};
