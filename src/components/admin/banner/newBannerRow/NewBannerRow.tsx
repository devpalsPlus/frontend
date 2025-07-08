import { useCallback } from 'react';
import * as S from './NewBannerRow.styled';
import { useNewBannerRow } from './useNewBannerRow';
import ImageUploadArea from '../imageUploadArea/ImageUploadArea';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import RadioGroup from '../radioGroup/RadioGroup';
import DateRange from '../dateRange/DateRange';

const NewBannerRow = () => {
  const { newBanner, canCreateBanner, handleInputChange, handleCreate } =
    useNewBannerRow();

  const handleImageClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        handleInputChange('imageUrl', file);
      }
    };

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }, [handleInputChange]);

  const imageUrl = newBanner.imageUrl
    ? URL.createObjectURL(newBanner.imageUrl)
    : '';

  return (
    <S.TableRow>
      <S.TableCell>
        <S.Placeholder>-</S.Placeholder>
      </S.TableCell>

      <S.ImageCell>
        <ImageUploadArea
          imageUrl={imageUrl}
          onImageClick={handleImageClick}
          onImageHover={() => {}}
          onImageLeave={() => {}}
          showOverlay={false}
        />
      </S.ImageCell>

      <S.TableCell>
        <ToggleSwitch
          id='toggle-new'
          checked={!!newBanner.visible}
          onChange={(checked) => handleInputChange('visible', checked)}
        />
      </S.TableCell>

      <S.TableCell>
        <RadioGroup
          name='new'
          value={newBanner.always}
          onChange={(always) => handleInputChange('always', always)}
        />
      </S.TableCell>

      <S.TableCell>
        {newBanner.always ? (
          <S.Placeholder>-</S.Placeholder>
        ) : (
          <DateRange
            startDate={newBanner.startDate}
            endDate={newBanner.endDate}
            onStartDateChange={(date) => handleInputChange('startDate', date)}
            onEndDateChange={(date) => handleInputChange('endDate', date)}
          />
        )}
      </S.TableCell>

      <S.TableCell>
        <S.CreateButton onClick={handleCreate} disabled={!canCreateBanner}>
          생성하기
        </S.CreateButton>
      </S.TableCell>
    </S.TableRow>
  );
};

export default NewBannerRow;
