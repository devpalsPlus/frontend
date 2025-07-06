import * as S from './BannerRow.styled';
import { BannerItem } from '../../../../models/admin/banner';
import ImageUploadArea from '../imageUploadArea/ImageUploadArea';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import RadioGroup from '../radioGroup/RadioGroup';
import DateRange from '../dateRange/DateRange';
import { useState } from 'react';
import { formatDate } from '../../../../util/formatDate';

interface BannerRowProps {
  banner: BannerItem;
  index: number;
  onToggle: (id: number, visible: boolean) => Promise<void>;
  onChangeType: (id: number, always: boolean) => Promise<void>;
  onDateChange: (
    id: number,
    startDate?: string,
    endDate?: string
  ) => Promise<void>;
  onImageChange: (bannerId: number, file: File) => Promise<void>;
  onDelete: (id: number) => void;
}

const BannerRow = ({
  banner,
  index,
  onToggle,
  onChangeType,
  onDateChange,
  onImageChange,
  onDelete,
}: BannerRowProps) => {
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);

  const showImageOverlay = hoveredImageId === banner.id;

  const handleImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';

    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        await onImageChange(banner.id, file);
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

  return (
    <S.TableRow key={banner.id}>
      <S.TableCell>{index + 1}</S.TableCell>
      <S.ImageCell>
        <ImageUploadArea
          imageUrl={banner.imageUrl}
          onImageClick={handleImageClick}
          onImageHover={() => handleImageHover(banner.id)}
          onImageLeave={handleImageLeave}
          showOverlay={showImageOverlay}
        />
      </S.ImageCell>
      <S.TableCell>
        <ToggleSwitch
          id={`toggle-${banner.id}`}
          checked={banner.visible}
          onChange={(checked) => onToggle(banner.id, checked)}
        />
      </S.TableCell>
      <S.TableCell>
        <RadioGroup
          name={banner.id.toString()}
          value={banner.always}
          onChange={(always) => onChangeType(banner.id, always)}
        />
      </S.TableCell>
      <S.TableCell>
        {banner.always ? (
          <S.Placeholder>-</S.Placeholder>
        ) : banner.startDate && banner.endDate ? (
          <S.DateDisplay>
            {formatDate(banner.startDate)} ~ {formatDate(banner.endDate)}
          </S.DateDisplay>
        ) : (
          <DateRange
            startDate={banner.startDate}
            endDate={banner.endDate}
            onStartDateChange={(date) =>
              onDateChange(banner.id, date, banner.endDate)
            }
            onEndDateChange={(date) =>
              onDateChange(banner.id, banner.startDate, date)
            }
            placeholder={{ start: '시작일', end: '종료일' }}
          />
        )}
      </S.TableCell>
      <S.TableCell>
        <S.DeleteButton onClick={() => onDelete(banner.id)}>
          삭제
        </S.DeleteButton>
      </S.TableCell>
    </S.TableRow>
  );
};

export default BannerRow;
