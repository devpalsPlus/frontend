import React from 'react';
import { useUploadProfileImg } from '../../../../hooks/useMyInfo';
import * as S from './EditMyProfileImg.styled';
import { PhotoIcon } from '@heroicons/react/24/outline';

const EditMyProfileImg = () => {
  const { uploadProfileImg } = useUploadProfileImg();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadProfileImg(file);
    }
  };

  return (
    <S.Container>
      <label htmlFor='profile-img-upload'>
        <PhotoIcon width='16' height='16' />
        <input
          id='profile-img-upload'
          type='file'
          accept='.PNG, .JPG, .JPEG, .SVG'
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </label>
    </S.Container>
  );
};

export default EditMyProfileImg;
