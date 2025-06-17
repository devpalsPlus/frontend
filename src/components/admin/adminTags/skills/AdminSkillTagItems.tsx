import * as S from './AdminSkillTagItems.styled';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';

interface AdminSKillTagItemsProps {
  onGetItemId: (id: number) => void;
  selectTagId: number[];
}

export default function AdminSkillTagItems({
  onGetItemId,
  selectTagId,
}: AdminSKillTagItemsProps) {
  const handleClickGetId = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    const id = Number(
      target.dataset.id || target.closest('[data-id]')?.getAttribute('data-id')
    );

    if (!id) return;
    onGetItemId(id);
  };

  return (
    <S.SkillTagItemWrapper onClick={handleClickGetId}>
      <SkillTagBox selectedTag={selectTagId} />
    </S.SkillTagItemWrapper>
  );
}
