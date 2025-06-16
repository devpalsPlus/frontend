import * as S from './AdminSkillTagItems.styled';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';
import { useEffect, useState } from 'react';

interface AdminSKillTagItemsProps {
  onGetItemId: (id: number) => number[];
}

export default function AdminSkillTagItems({
  onGetItemId,
}: AdminSKillTagItemsProps) {
  const [selectTagId, setSelectTagId] = useState<number[]>();

  useEffect(() => {
    console.log(selectTagId);
  }, [selectTagId]);

  const handleClickGetId = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    const id = Number(
      target.dataset.id || target.closest('[data-id]')?.getAttribute('data-id')
    );

    if (!id) return;
    onGetItemId(id);
    setSelectTagId(onGetItemId(id));
  };

  return (
    <S.SkillTagItemWrapper onClick={handleClickGetId}>
      <SkillTagBox selectedTag={selectTagId} />
    </S.SkillTagItemWrapper>
  );
}
