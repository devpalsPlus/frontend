import { useState } from 'react';
import * as S from './AdminTagsBasic.styled';
import { useAdminSkillTag } from '../../../hooks/admin/useAdminTag';
import { useLocation } from 'react-router-dom';
import AdminTagCRUD from './AdminTagCRUD';
import AdminSkillTagItems from './skills/AdminSkillTagItems';
import type { TagFormType } from '../../../models/tags';
import AdminPositionItems from './positions/AdminPositionItems';

export type TWitchTag = 'skill' | 'position';

export default function AdminTagsBasic() {
  const location = useLocation();
  const pathname = location.pathname;
  const witchTag: TWitchTag = pathname.includes('skill') ? 'skill' : 'position';

  const {
    postSkillTagMutate,
    putSkillTagMutate,
    deleteSkillTagMutate,
    postPositionTagMutate,
    putPositionTagMutate,
    deletePositionTagMutate,
  } = useAdminSkillTag();
  const [itemId, setItemId] = useState<number | null>(null);
  const selectTagId = itemId ? [itemId] : [];

  const tagState = {
    skill: {
      type: 'skill',
      label: '스킬',
      needImgFile: true,
      handlePostTag: (formData: FormData) =>
        postSkillTagMutate.mutate(formData),
      handlePutTag: ({ params, id }: { params: FormData; id: number }) =>
        putSkillTagMutate.mutate({ formData: params, id }),
      handleDeleteTag: (id: number) => deleteSkillTagMutate.mutate(id),
    },
    position: {
      type: 'position',
      label: '포지션',
      needImgFile: false,
      handlePostTag: (name: Pick<TagFormType, 'name'>) =>
        postPositionTagMutate.mutate(name),
      handlePutTag: ({
        params,
        id,
      }: {
        params: Pick<TagFormType, 'name'>;
        id: number;
      }) => putPositionTagMutate.mutate({ name: params, id }),
      handleDeleteTag: (id: number) => deletePositionTagMutate.mutate(id),
    },
  };

  const handleGetItemId = (id: number | null) => {
    setItemId(id);
  };

  return (
    <S.Container>
      <S.CRUDContainer>
        {witchTag === 'skill' ? (
          <AdminTagCRUD<FormData>
            state={tagState.skill}
            itemId={itemId}
            onGetItemId={handleGetItemId}
          />
        ) : (
          <AdminTagCRUD<Pick<TagFormType, 'name'>>
            state={tagState.position}
            itemId={itemId}
            onGetItemId={handleGetItemId}
          />
        )}
      </S.CRUDContainer>
      <S.ItemContainer>
        {witchTag === 'skill' ? (
          <AdminSkillTagItems
            onGetItemId={handleGetItemId}
            selectTagId={selectTagId}
          />
        ) : (
          <AdminPositionItems onGetItemId={handleGetItemId} />
        )}
      </S.ItemContainer>
    </S.Container>
  );
}
