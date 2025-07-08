import { useState, useCallback } from 'react';
import { BannerItem, BannerChanges } from '../../../../models/admin/banner';
import { useBannerMutations } from '../../../../hooks/admin/useBannerMutations';
import { useModal } from '../../../../hooks/useModal';

interface CurrentValues {
  visible: boolean;
  always: boolean;
  startDate: string;
  endDate: string;
  imageUrl: string;
}

export const useBannerRow = (banner: BannerItem) => {
  const { handleModalOpen } = useModal();
  const { patchBannerMutate } = useBannerMutations({ handleModalOpen });

  const [changes, setChanges] = useState<BannerChanges>({});

  // 현재 표시할 값들 계산
  const currentValues: CurrentValues = {
    visible: changes.visible ?? banner.visible,
    always: changes.always ?? banner.always,
    startDate: changes.startDate ?? banner.startDate,
    endDate: changes.endDate ?? banner.endDate,
    imageUrl: changes.newImageFile
      ? URL.createObjectURL(changes.newImageFile)
      : banner.imageUrl,
  };

  // 변경사항 업데이트
  const updateChanges = useCallback(
    (updates: Partial<BannerChanges>) => {
      setChanges((prev) => {
        const newChanges = { ...prev, ...updates };

        // 실제 변경사항만 필터링
        const actualChanges: BannerChanges = {};

        Object.entries(newChanges).forEach(([key, newValue]) => {
          const field = key as keyof BannerChanges;
          const originalValue = banner[field as keyof BannerItem];

          if (field === 'newImageFile') {
            if (newValue && newValue instanceof File) {
              actualChanges[field] = newValue;
            }
          } else if (newValue !== originalValue) {
            (actualChanges as any)[field] = newValue;
          }
        });

        return actualChanges;
      });
    },
    [banner]
  );

  // 변경사항 초기화
  const resetChanges = useCallback(() => {
    setChanges({});
  }, []);

  // 이벤트 핸들러들
  const handleToggle = useCallback(
    (visible: boolean) => {
      updateChanges({ visible });
    },
    [updateChanges]
  );

  const handleChangeType = useCallback(
    (always: boolean) => {
      const updates: Partial<BannerChanges> = { always };

      if (always) {
        // 상시 노출로 변경할 때는 무조건 원본 배너의 startDate, endDate 값으로 되돌림
        updates.startDate = banner.startDate;
        updates.endDate = banner.endDate;
      } else {
        const currentStartDate = changes.startDate ?? banner.startDate;
        const currentEndDate = changes.endDate ?? banner.endDate;

        if (banner.startDate !== '' || currentStartDate !== '') {
          updates.startDate = currentStartDate;
        }
        if (banner.endDate !== '' || currentEndDate !== '') {
          updates.endDate = currentEndDate;
        }
      }

      updateChanges(updates);
    },
    [updateChanges, changes, banner]
  );

  const handleDateChange = useCallback(
    (startDate?: string, endDate?: string) => {
      if (currentValues.always) return;

      updateChanges({
        startDate: startDate ?? '',
        endDate: endDate ?? '',
      });
    },
    [currentValues.always, updateChanges]
  );

  const handleImageChange = useCallback(
    (file: File) => {
      updateChanges({ newImageFile: file });
    },
    [updateChanges]
  );

  const handleUpdate = useCallback(async () => {
    if (Object.keys(changes).length === 0) return;

    try {
      const formData = new FormData();

      if (changes.newImageFile) {
        formData.append('image', changes.newImageFile);
      }

      const updatedData = {
        visible: changes.visible ?? banner.visible,
        always: changes.always ?? banner.always,
        startDate: changes.startDate ?? banner.startDate,
        endDate: changes.endDate ?? banner.endDate,
      };

      formData.append('request', JSON.stringify(updatedData));
      await patchBannerMutate.mutateAsync({ formData, bannerId: banner.id });

      resetChanges();
      handleModalOpen('배너가 수정되었습니다.');
    } catch (error) {
      console.error('배너 업데이트 실패:', error);
      handleModalOpen('배너 수정에 실패했습니다.');
    }
  }, [changes, banner, patchBannerMutate, resetChanges, handleModalOpen]);

  const hasChanges = Object.keys(changes).length > 0;

  return {
    currentValues,
    hasChanges,
    handleToggle,
    handleChangeType,
    handleDateChange,
    handleImageChange,
    handleUpdate,
  };
};
