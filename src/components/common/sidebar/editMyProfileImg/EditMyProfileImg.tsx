import React from 'react';
import { useUploadProfileImg } from '../../../../hooks/user/useMyInfo';
import * as S from './EditMyProfileImg.styled';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { useModal } from '../../../../hooks/useModal';
import Modal from '../../modal/Modal';

const EditMyProfileImg = () => {
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { uploadProfileImg } = useUploadProfileImg(handleModalOpen);

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
          accept='.png, .jpg, .jpeg, .svg'
          onChange={handleFileChange}
        />
      </label>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default EditMyProfileImg;
