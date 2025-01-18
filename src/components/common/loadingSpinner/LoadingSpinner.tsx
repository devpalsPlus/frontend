import ScrollPreventor from '../modal/ScrollPreventor';
import * as S from './LoadingSpinner.styled';

const LoadingSpinner = () => {
  return (
    <ScrollPreventor>
      <S.Container>
        <S.Spinner />
      </S.Container>
    </ScrollPreventor>
  );
};

export default LoadingSpinner;
