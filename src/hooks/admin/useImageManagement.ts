import { useState, useRef } from 'react';

export const useImageManagement = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);

  const handleImageUpload = (
    file: File,
    bannerId?: number,
    onImageChange?: (imageUrl: string, bannerId?: number) => void
  ) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (onImageChange) {
        onImageChange(base64, bannerId);
      }
    };
    reader.onerror = () => {
      console.error('이미지 업로드에 실패했습니다.');
    };
    reader.readAsDataURL(file);
  };

  const handleImageClick = (
    bannerId?: number,
    onImageChange?: (imageUrl: string, bannerId?: number) => void
  ) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        handleImageUpload(file, bannerId, onImageChange);
      }
    };

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  const handleImageHover = (id: number) => {
    setHoveredImageId(id);
  };

  const handleImageLeave = () => {
    setHoveredImageId(null);
  };

  return {
    fileInputRef,
    hoveredImageId,
    handleImageClick,
    handleImageHover,
    handleImageLeave,
  };
};
