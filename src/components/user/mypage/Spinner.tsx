import * as S from './Spinner.styled';

interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner = ({ size = '50px', color = '#3e5879' }: SpinnerProps) => {
  return (
    <S.SpinnerContainer>
      <S.Circle $size={size} $color={color} />
    </S.SpinnerContainer>
  );
};

export default Spinner;
