import * as S from './PositionButton.styled';

interface PositionButtonProps {
  position: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isSelected?: boolean;
  isHover?: boolean;
}

export default function PositionButton({
  position,
  onClick,
  isSelected = false,
  isHover = false,
}: PositionButtonProps) {
  return (
    <S.Container onClick={onClick} $isSelected={isSelected} $isHover={isHover}>
      <div className='positionButton'>{position}</div>
    </S.Container>
  );
}
