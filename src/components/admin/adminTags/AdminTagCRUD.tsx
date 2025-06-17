import * as S from './AdminTagCRUD.styled';
import defaultImg from './../../../assets/defaultImg.png';
import React, { useEffect, useRef, useState } from 'react';
import type { PositionTag, SkillTag, TagFormType } from '../../../models/tags';
import Modal from '../../common/modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';
import { useSearchFilteringTags } from '../../../hooks/user/useSearchFilteringTags';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TagState<T> {
  type: string;
  label: string;
  needImgFile: boolean;
  handlePostTag: (params: T) => void;
  handlePutTag: ({ params, id }: { params: T; id: number }) => void;
  handleDeleteTag: (id: number) => void;
}

interface AdminTagCRUDProps<T> {
  state: TagState<T>;
  itemId: number | null;
  onGetItemId: (id: number | null) => void;
}

interface FormDataType extends TagFormType {
  imgName: string;
  preview: string;
}

type Skill = Omit<SkillTag, 'createdAt'>;

type CRUDDataType = Skill | PositionTag;

type SubmitButtonType = '등록' | '수정' | '삭제';

export default function AdminTagCRUD<T>({
  state,
  itemId,
  onGetItemId,
}: AdminTagCRUDProps<T>) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { skillTagsData, positionTagsData } = useSearchFilteringTags();

  const [buttonType, setButtonType] = useState<SubmitButtonType>('등록');
  const [formState, setFormState] = useState<FormDataType>({
    name: '',
    imgName: '',
    preview: '',
    img: undefined,
  });

  const data: CRUDDataType =
    state.type === 'skill'
      ? skillTagsData.filter((list) => list.id === itemId)[0]
      : positionTagsData.filter((list) => list.id === itemId)[0];

  const handleSubmitTag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const name = String(formData.get('name'));

    const isValid = {
      name: formState.name.trim() !== '',
      imgName: formState.imgName.trim() !== '',
    };

    if (!isValid.name) {
      return handleModalOpen(MODAL_MESSAGE.emptyTag);
    }
    if (state.type === 'skill' && !isValid.imgName && !itemId) {
      return handleModalOpen(MODAL_MESSAGE.emptySkillImg);
    }

    switch (buttonType) {
      case '등록':
        {
          const duplication =
            state.type === 'skill'
              ? skillTagsData.filter((data) => data.name === name)
              : positionTagsData.filter((data) => data.name === name);
          if (duplication.length > 0) {
            return handleModalOpen(MODAL_MESSAGE.duplicationTag);
          }
          if (state.type === 'skill') {
            state.handlePostTag(formData as T);
          } else {
            state.handlePostTag(name as T);
          }
        }
        break;
      case '수정':
        {
          const duplication =
            state.type === 'skill'
              ? skillTagsData
                  .filter((data) => data.id !== itemId)
                  .filter((data) => data.name === name)
              : positionTagsData
                  .filter((data) => data.id !== itemId)
                  .filter((data) => data.name === name);
          if (duplication.length > 0) {
            return handleModalOpen(MODAL_MESSAGE.duplicationTag);
          }
          if (state.type === 'skill') {
            state.handlePutTag({ params: formData, id: itemId } as {
              params: T;
              id: number;
            });
          } else {
            state.handlePutTag({ params: name, id: itemId } as {
              params: T;
              id: number;
            });
          }
        }

        break;
      case '삭제':
        if (itemId) {
          state.handleDeleteTag(itemId);
        }
        break;
      default:
        break;
    }
    handleClickReset();
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFormState((prev) => ({ ...prev, name }));
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files?.[0];
    const imgName = img?.name || '';
    const preview = img ? URL.createObjectURL(img) : '';
    setFormState((prev) => ({ ...prev, imgName, preview, img }));
  };

  const handleClickReset = () => {
    setFormState({
      name: '',
      imgName: '',
      preview: '',
      img: undefined,
    });
    onGetItemId(null);
    setTimeout(() => {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      if (textInputRef.current) {
        textInputRef.current.value = '';
      }
    }, 1000);
  };

  const handleClickChangeButtonType = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = e.currentTarget.id as SubmitButtonType;
    setButtonType(id);
  };

  useEffect(() => {
    if (data) {
      if (state.type === 'skill') {
        const skillData = data as unknown as Skill;
        if (skillData.img) {
          const preview = skillData.img as string;
          setFormState((prev) => ({ ...prev, name: data.name, preview }));
        }
      } else {
        setFormState((prev) => ({ ...prev, name: data.name }));
      }
    }
  }, [data, state]);

  useEffect(() => {
    return () => {
      if (formState.preview) {
        URL.revokeObjectURL(formState.preview);
      }
    };
  }, [formState]);

  return (
    <S.CRUDContainer onSubmit={handleSubmitTag}>
      <S.CRUDWrapper>
        <S.InfoContainer>
          <S.CRUDTitleWrapper>
            <S.CRUDTitleHead>{state.label}: </S.CRUDTitleHead>
            <S.CRUDTitle
              type='text'
              name='name'
              value={formState.name}
              placeholder='태그명을 입력하세요.'
              onChange={handleChangeValue}
              ref={textInputRef}
            />
            {itemId && (
              <S.CRUDDefaultButton type='button' onClick={handleClickReset}>
                <XMarkIcon />
              </S.CRUDDefaultButton>
            )}
          </S.CRUDTitleWrapper>
          {state.type === 'skill' && (
            <S.CRUDImgWrapper>
              <S.CRUDImgHead>이미지: </S.CRUDImgHead>
              <S.CRUDImg
                src={formState.preview || defaultImg}
                alt='스킬태그 이미지'
              />
              <S.CRUDImgExplore htmlFor='upload' as='label'>
                파일찾기
              </S.CRUDImgExplore>
              <S.CRUDImgExplain>{formState.imgName}</S.CRUDImgExplain>
              <S.CRUDImgInput
                type='file'
                name='img'
                id='upload'
                onChange={handleChangeFile}
                ref={fileInputRef}
              />
            </S.CRUDImgWrapper>
          )}
        </S.InfoContainer>
        <S.CRUDButtonWrapper>
          <S.CRUDButton
            type='submit'
            onClick={handleClickChangeButtonType}
            id={itemId ? '수정' : '등록'}
          >
            {itemId ? '수정' : '등록'}
          </S.CRUDButton>
          {Boolean(itemId) && (
            <S.CRUDButton
              type='submit'
              onClick={handleClickChangeButtonType}
              id={itemId ? '삭제' : undefined}
            >
              삭제
            </S.CRUDButton>
          )}
        </S.CRUDButtonWrapper>
      </S.CRUDWrapper>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.CRUDContainer>
  );
}
