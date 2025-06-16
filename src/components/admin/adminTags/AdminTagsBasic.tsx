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
    deleteSkillTagMutate,
    postPositionTagMutate,
    deletePositionTagMutate,
  } = useAdminSkillTag();
  const [itemId, setItemId] = useState<number | null>(null);

  const tagState = {
    skill: {
      type: 'skill',
      label: '스킬',
      needImgFile: true,
      handlePostTag: (formData: FormData) =>
        postSkillTagMutate.mutate(formData),
      handleDeleteTag: (id: number) => deleteSkillTagMutate.mutate(id),
    },
    position: {
      type: 'position',
      label: '포지션',
      needImgFile: false,
      handlePostTag: (name: Pick<TagFormType, 'name'>) =>
        postPositionTagMutate.mutate(name),
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
        <AdminSkillTagItems onGetItemId={handleGetItemId} />
        <AdminPositionItems onGetItemId={handleGetItemId} />
      </S.ItemContainer>
    </S.Container>
  );
}
