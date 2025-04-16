import { useContext } from 'react';
import { ErrorBoundaryContext } from '../../../context/ErrorBoundaryContext';
import * as S from './ErrorFallBack.styled';
import wifi from '../../../assets/wifi.svg';
import Button from '../Button/Button';
import { HTTP_ERROR_MESSAGES } from '../../../constants/httpMessage';
import { AxiosError } from 'axios';

interface ErrorFallBackProps {
  error: AxiosError;
}

const getErrorMessage = (statusCode: number | 'unknown') => {
  const errorMessage = HTTP_ERROR_MESSAGES[statusCode];
  return errorMessage ?? HTTP_ERROR_MESSAGES.unknown;
};

const ErrorFallback = ({ error }: ErrorFallBackProps) => {
  const { title, description } = getErrorMessage(
    error.response?.status ?? 'unknown'
  );

  const context = useContext(ErrorBoundaryContext);
  if (!context) return null;

  const { resetErrorBoundary } = context;

  return (
    <S.Container>
      <img src={wifi} alt='wifi' />
      <S.ErrorMessage>{title}</S.ErrorMessage>
      <S.ErrorDescription>{description}</S.ErrorDescription>

      <Button
        size='primary'
        schema='primary'
        radius='primary'
        onClick={resetErrorBoundary}
      >
        재시도하기
      </Button>
    </S.Container>
  );
};

export default ErrorFallback;
