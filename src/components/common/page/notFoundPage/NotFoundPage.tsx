import { useNavigate } from 'react-router-dom';
import * as S from './NotFoundPage.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.BackButton onClick={handleBack}>뒤로 가기</S.BackButton>
    </S.Container>
  );
};

export default NotFoundPage;
