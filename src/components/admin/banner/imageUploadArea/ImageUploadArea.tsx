import * as S from './ImageUploadArea.styled';
import { PencilIcon } from '@heroicons/react/24/outline';

interface ImageUploadAreaProps {
  imageUrl?: string;
  onImageClick: () => void;
  onImageHover?: () => void;
  onImageLeave?: () => void;
  showOverlay?: boolean;
}

const ImageUploadArea = ({
  imageUrl,
  onImageClick,
  onImageHover,
  onImageLeave,
  showOverlay = false,
}: ImageUploadAreaProps) => {
  if (imageUrl) {
    return (
      <S.ImageUploadArea
        onMouseEnter={onImageHover}
        onMouseLeave={onImageLeave}
        onClick={onImageClick}
      >
        <S.Thumbnail src={imageUrl} alt='' />
        {showOverlay && (
          <S.ImageOverlay>
            <S.EditIcon>
              <PencilIcon />
            </S.EditIcon>
          </S.ImageOverlay>
        )}
      </S.ImageUploadArea>
    );
  }

  return <S.PlusButton onClick={onImageClick}>＋</S.PlusButton>;
};

export default ImageUploadArea;
