import { useState, useCallback } from 'react';
import { BannerFormData } from '../../../../models/admin/banner';
import { useBannerMutations } from '../../../../hooks/admin/useBannerMutations';
import { useModal } from '../../../../hooks/useModal';

const createInitialBannerState = (): BannerFormData => ({
  imageUrl: undefined,
  visible: false,
  always: true,
  startDate: '',
  endDate: '',
});

export const useNewBannerRow = () => {
  const { handleModalOpen } = useModal();
  const { postBannerMutate } = useBannerMutations({ handleModalOpen });

  const [newBanner, setNewBanner] = useState<BannerFormData>(
    createInitialBannerState
  );

  const handleInputChange = useCallback(
    (field: keyof BannerFormData, value: string | boolean | File) => {
      setNewBanner((prev) => ({ ...prev, [field]: value } as BannerFormData));
    },
    []
  );

  const handleCreate = useCallback(async () => {
    if (!newBanner.imageUrl) {
      handleModalOpen('이미지를 선택해주세요.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', newBanner.imageUrl);
      formData.append(
        'request',
        JSON.stringify({
          visible: newBanner.visible,
          always: newBanner.always,
          startDate: newBanner.startDate,
          endDate: newBanner.endDate,
        })
      );

      await postBannerMutate.mutateAsync(formData);
      setNewBanner(createInitialBannerState());
      handleModalOpen('배너가 생성되었습니다.');
    } catch (error) {
      console.error('배너 생성 실패:', error);
      handleModalOpen('배너 생성에 실패했습니다.');
    }
  }, [newBanner, postBannerMutate, handleModalOpen]);

  const resetNewBanner = useCallback(() => {
    setNewBanner(createInitialBannerState());
  }, []);

  const canCreateBanner = Boolean(newBanner.imageUrl);
  const hasNewBannerChanges = Boolean(
    newBanner.imageUrl || newBanner.startDate || newBanner.endDate
  );

  return {
    newBanner,
    canCreateBanner,
    hasNewBannerChanges,
    handleInputChange,
    handleCreate,
    resetNewBanner,
  };
};
