import { useSearchFilteringTags } from '../../../../hooks/user/useSearchFilteringTags';
import PositionButton from '../../../common/positionButton/PositionButton';
import * as S from './AdminPositionItems.styled';

interface AdminPositionItemsProps {
  onGetItemId: (id: number) => void;
}

export default function AdminPositionItems({
  onGetItemId,
}: AdminPositionItemsProps) {
  const { positionTagsData } = useSearchFilteringTags();

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
