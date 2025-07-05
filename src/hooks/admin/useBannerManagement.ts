import { useState } from 'react';
import { useGetAllBannerList } from './useGetAllBannerList';
import { useBannerMutations } from './useBannerMutations';
import { BannerItem, BannerFormData } from '../../models/admin/banner';

interface UseBannerManagementProps {
  handleModalOpen: (message: string) => void;
}

const createInitialBannerState = (): BannerFormData => ({
  imageUrl: undefined,
  visible: false,
  always: true,
  startDate: '',
  endDate: '',
});

const confirmFormData = (formData: FormData, title: string = 'FormData') => {
  console.log(`=== ${title} 내용 ===`);
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      console.log(`${key}:`, {
        name: value.name,
        size: value.size,
        type: value.type,
        lastModified: value.lastModified,
      });
    } else {
      console.log(`${key}:`, value);
    }
  }
  console.log('=== FormData 끝 ===');
};

export const useBannerManagement = ({
  handleModalOpen,
}: UseBannerManagementProps) => {
  const { allBannersData, isLoading, refetch } = useGetAllBannerList();
  const { postBannerMutate, patchBannerMutate, deleteBannerMutate } =
    useBannerMutations({
      handleModalOpen,
    });

  const [isCreating, setIsCreating] = useState(false);
  const [newBanner, setNewBanner] = useState<BannerFormData>(
    createInitialBannerState
  );

  const allBanners = allBannersData?.data ?? [];

  // 즉시 API 호출하는 헬퍼 함수
  const updateBannerImmediately = async (
    bannerId: number,
    updates: Partial<BannerItem>
  ) => {
    try {
      const currentBanner = allBanners.find((banner) => banner.id === bannerId);
      if (!currentBanner) return;

      const formData = new FormData();
      formData.append(
        'visible',
        (updates.visible ?? currentBanner.visible).toString()
      );
      formData.append(
        'always',
        (updates.always ?? currentBanner.always).toString()
      );
      formData.append(
        'startDate',
        updates.startDate ?? currentBanner.startDate
      );
      formData.append('endDate', updates.endDate ?? currentBanner.endDate);

      await patchBannerMutate.mutateAsync({ formData, bannerId });
      await refetch();
    } catch (error) {
      console.error('배너 업데이트 실패:', error);
    }
  };

  const handleToggle = async (id: number, visible: boolean) => {
    await updateBannerImmediately(id, { visible });
  };

  const handleChangeType = async (id: number, always: boolean) => {
    const updates: Partial<BannerItem> = { always };
    if (always) {
      updates.startDate = '';
      updates.endDate = '';
    }
    await updateBannerImmediately(id, updates);
  };

  const handleDateChange = async (
    id: number,
    startDate?: string,
    endDate?: string
  ) => {
    await updateBannerImmediately(id, {
      startDate: startDate ?? '',
      endDate: endDate ?? '',
    });
  };

  // 기존 배너 이미지 변경 함수
  const handleImageChange = async (bannerId: number, file: File) => {
    try {
      const formData = new FormData();
      formData.append('imageUrl', file);

      // 기존 배너 정보도 함께 전송
      const existingBanner = allBanners.find(
        (banner) => banner.id === bannerId
      );
      if (existingBanner) {
        formData.append('visible', existingBanner.visible.toString());
        formData.append('always', existingBanner.always.toString());
        formData.append('startDate', existingBanner.startDate);
        formData.append('endDate', existingBanner.endDate);
      }

      confirmFormData(formData, '배너 이미지 변경');

      await patchBannerMutate.mutateAsync({ formData, bannerId });
      await refetch();
    } catch (error) {
      console.error('이미지 변경 실패:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await deleteBannerMutate.mutateAsync(id);
        await refetch();
      } catch (error) {
        console.error('삭제 실패:', error);
      }
    }
  };

  const handleCreate = async () => {
    if (!newBanner.imageUrl) {
      handleModalOpen('이미지를 선택해주세요.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('imageUrl', newBanner.imageUrl);
      formData.append('visible', newBanner.visible.toString());
      formData.append('always', newBanner.always.toString());
      formData.append('startDate', newBanner.startDate);
      formData.append('endDate', newBanner.endDate);

      confirmFormData(formData, '배너 생성');

      await postBannerMutate.mutateAsync(formData);

      setIsCreating(false);
      setNewBanner(createInitialBannerState());

      await refetch();

      handleModalOpen('배너가 생성되었습니다.');
    } catch (error) {
      console.error('배너 생성 실패:', error);
      handleModalOpen('배너 생성에 실패했습니다.');
    }
  };

  const handleInputChange = (
    field: keyof BannerFormData,
    value: string | boolean | File
  ) => {
    setNewBanner((prev) => ({ ...prev, [field]: value } as BannerFormData));
  };

  const toggleCreating = () => {
    if (isCreating) {
      setNewBanner(createInitialBannerState());
    }
    setIsCreating((prev) => !prev);
  };

  const resetNewBanner = () => {
    setNewBanner(createInitialBannerState());
  };

  const canCreateBanner = Boolean(newBanner.imageUrl);

  const hasNewBannerChanges = Boolean(
    newBanner.imageUrl || newBanner.startDate || newBanner.endDate
  );

  return {
    allBanners,
    isLoading,
    newBanner,
    isCreating,
    canCreateBanner,
    hasNewBannerChanges,
    handleToggle,
    handleChangeType,
    handleDateChange,
    handleImageChange,
    handleDelete,
    handleCreate,
    handleInputChange,
    toggleCreating,
    resetNewBanner,
  };
};
