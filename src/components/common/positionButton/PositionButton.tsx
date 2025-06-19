import * as S from './PositionButton.styled';

interface PositionButtonProps {
  position: string;
  onClickSelect?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected?: boolean;
  isHover?: boolean;
  fontSize?: boolean;
}

export default function PositionButton({
  position,
  onClickSelect,
  isSelected = false,
  isHover = false,
  fontSize = false,
}: PositionButtonProps) {
  return (
    <S.PositionButton
      $isSelected={isSelected}
      $isHover={isHover}
      $fontSize={fontSize}
      type='button'
      onClick={(e) => onClickSelect?.(e)}
    >
      {position}
    </S.PositionButton>
  );
}
