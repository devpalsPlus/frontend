import { useState, useCallback } from 'react';
import * as S from './BannerRow.styled';
import { BannerItem } from '../../../../models/admin/banner';
import { useBannerRow } from './useBannerRow';
import ImageUploadArea from '../imageUploadArea/ImageUploadArea';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import RadioGroup from '../radioGroup/RadioGroup';
import DateRange from '../dateRange/DateRange';
import { formatDate } from '../../../../util/formatDate';

interface BannerRowProps {
  banner: BannerItem;
  index: number;
  onDelete: (id: number) => void;
}

const BannerRow = ({ banner, index, onDelete }: BannerRowProps) => {
  const {
    currentValues,
    hasChanges,
    handleToggle,
    handleChangeType,
    handleDateChange,
    handleImageChange,
    handleUpdate,
  } = useBannerRow(banner);

  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);
  const showImageOverlay = hoveredImageId === banner.id;

  // 이미지 관련 핸들러
  const handleImageClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        handleImageChange(file);
      }
    };

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }, [handleImageChange]);

  // 날짜 표시 렌더링
  const renderDateDisplay = () => {
    if (currentValues.always) {
      return <S.Placeholder>-</S.Placeholder>;
    }

    if (currentValues.startDate && currentValues.endDate) {
      return (
        <S.DateDisplay>
          {formatDate(currentValues.startDate)} ~{' '}
          {formatDate(currentValues.endDate)}
        </S.DateDisplay>
      );
    }

    return (
      <DateRange
        startDate={currentValues.startDate}
        endDate={currentValues.endDate}
        onStartDateChange={(date) =>
          handleDateChange(date, currentValues.endDate)
        }
        onEndDateChange={(date) =>
          handleDateChange(currentValues.startDate, date)
        }
        placeholder={{ start: '시작일', end: '종료일' }}
      />
    );
  };

  return (
    <S.TableRow>
      <S.TableCell>{index + 1}</S.TableCell>

      <S.ImageCell>
        <ImageUploadArea
          imageUrl={currentValues.imageUrl}
          onImageClick={handleImageClick}
          onImageHover={() => setHoveredImageId(banner.id)}
          onImageLeave={() => setHoveredImageId(null)}
          showOverlay={showImageOverlay}
        />
      </S.ImageCell>

      <S.TableCell>
        <ToggleSwitch
          id={`toggle-${banner.id}`}
          checked={currentValues.visible}
          onChange={handleToggle}
        />
      </S.TableCell>

      <S.TableCell>
        <RadioGroup
          name={banner.id.toString()}
          value={currentValues.always}
          onChange={handleChangeType}
        />
      </S.TableCell>

      <S.TableCell>{renderDateDisplay()}</S.TableCell>

      <S.TableCell>
        <S.EditButton onClick={handleUpdate} disabled={!hasChanges}>
          수정
        </S.EditButton>
        <S.DeleteButton onClick={() => onDelete(banner.id)}>
          삭제
        </S.DeleteButton>
      </S.TableCell>
    </S.TableRow>
  );
};

export default BannerRow;
