import * as S from './PositionButton.styled';

interface PositionButtonProps {
  position: string;
}

export default function PositionButton({ position }: PositionButtonProps) {
  return (
    <S.Container>
      <div className='positionButton'>{position}</div>
    </S.Container>
  );
}
