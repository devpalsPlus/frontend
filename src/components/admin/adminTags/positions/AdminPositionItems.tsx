import { useSearchFilteringSkillTag } from '../../../../hooks/user/useSearchFilteringSkillTag';
import PositionButton from '../../../common/positionButton/PositionButton';
import * as S from './AdminPositionItems.styled';

interface AdminPositionItemsProps {
  onGetItemId: (id: number) => void;
}

export default function AdminPositionItems({
  onGetItemId,
}: AdminPositionItemsProps) {
  const { positionTagsData } = useSearchFilteringSkillTag();

  return (
    <S.Container>
      {positionTagsData.map((list) => (
        <PositionButton
          key={list.id}
          position={list.name}
          fontSize={true}
          onClickSelect={() => onGetItemId(list.id)}
        />
      ))}
    </S.Container>
  );
}
