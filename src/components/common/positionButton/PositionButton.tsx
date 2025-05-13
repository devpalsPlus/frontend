import * as S from './PositionButton.styled';

interface PositionButtonProps {
  position: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isSelected?: boolean;
  isHover?: boolean;
  fontSize: boolean;
}

export default function PositionButton({
  position,
  onClick,
  isSelected = false,
  isHover = false,
  fontSize = false,
}: PositionButtonProps) {
  return (
    <S.Container onClick={onClick}>
      <S.PositionButton
        $isSelected={isSelected}
        $isHover={isHover}
        $fontSize={fontSize}
        type='button'
      >
        {position}
      </S.PositionButton>
    </S.Container>
  );
}
