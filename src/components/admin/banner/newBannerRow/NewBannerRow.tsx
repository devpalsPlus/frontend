import * as S from './NewBannerRow.styled';
import { BannerFormData } from '../../../../models/admin/banner';
import ImageUploadArea from '../imageUploadArea/ImageUploadArea';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import RadioGroup from '../radioGroup/RadioGroup';
import DateRange from '../dateRange/DateRange';

interface NewBannerRowProps {
  newBanner: BannerFormData;
  canCreateBanner: boolean;
  onInputChange: (
    field: keyof BannerFormData,
    value: string | boolean | File
  ) => void;
  onCreate: () => void;
}

const NewBannerRow = ({
  newBanner,
  canCreateBanner,
  onInputChange,
  onCreate,
}: NewBannerRowProps) => {
  const handleImageChange = (file: File) => {
    onInputChange('imageUrl', file);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';

    input.onchange = (event) =>
      handleFileInputChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

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
          onChange={(checked) => onInputChange('visible', checked)}
        />
      </S.TableCell>
      <S.TableCell>
        <RadioGroup
          name='new'
          value={newBanner.always}
          onChange={(always) => onInputChange('always', always)}
        />
      </S.TableCell>
      <S.TableCell>
        {newBanner.always ? (
          <S.Placeholder>-</S.Placeholder>
        ) : (
          <DateRange
            startDate={newBanner.startDate}
            endDate={newBanner.endDate}
            onStartDateChange={(date) => onInputChange('startDate', date)}
            onEndDateChange={(date) => onInputChange('endDate', date)}
          />
        )}
      </S.TableCell>
      <S.TableCell>
        <S.CreateButton onClick={onCreate} disabled={!canCreateBanner}>
          생성하기
        </S.CreateButton>
      </S.TableCell>
    </S.TableRow>
  );
};

export default NewBannerRow;
