import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  postBanner,
  patchBanner,
  deleteBanner,
} from '../../api/admin/banner.api';
import { Banners } from '../queries/keys';
import { ADMIN_MODAL_MESSAGE } from '../../constants/admin/adminModal';

export type State = 'success' | 'fail';

export const useBannerMutations = ({
  handleModalOpen,
}: {
  handleModalOpen: (message: string) => void;
}) => {
  const queryClient = useQueryClient();

  const handleDeleteButtonState = (state: State) => {
    switch (state) {
      case 'success':
        handleModalOpen(ADMIN_MODAL_MESSAGE.writeDeleteSuccess);
        break;
      case 'fail':
        handleModalOpen(ADMIN_MODAL_MESSAGE.writeDeleteFail);
        break;
      default:
        handleModalOpen(ADMIN_MODAL_MESSAGE.writeError);
        break;
    }
  };

  const postBannerMutate = useMutation<void, AxiosError, FormData>({
    mutationFn: (formData: FormData) => postBanner(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [Banners.allBanners],
      });
    },
    onError: () => {
      console.error('배너 생성에 실패했습니다.');
    },
  });

  const patchBannerMutate = useMutation<
    void,
    AxiosError,
    { formData: FormData; bannerId: number }
  >({
    mutationFn: ({ formData, bannerId }) => patchBanner(formData, bannerId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [Banners.allBanners],
      });
    },
    onError: () => {
      console.error('배너 수정에 실패했습니다.');
    },
  });

  const deleteBannerMutate = useMutation<void, AxiosError, number>({
    mutationFn: (bannerId: number) => deleteBanner(bannerId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [Banners.allBanners],
      });
      handleDeleteButtonState('success');
    },
    onError: () => {
      handleDeleteButtonState('fail');
    },
  });

  return {
    postBannerMutate,
    patchBannerMutate,
    deleteBannerMutate,
  };
};
