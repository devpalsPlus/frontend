import * as S from './AdminSkillTagItems.styled';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';

interface AdminSKillTagItemsProps {
  onGetItemId: (id: number) => void;
}

export default function AdminSkillTagItems({
  onGetItemId,
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
      <SkillTagBox />
    </S.SkillTagItemWrapper>
  );
}
