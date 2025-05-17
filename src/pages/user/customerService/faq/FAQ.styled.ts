import styled from 'styled-components';
import { SpinnerWrapperStyled } from '../../../../components/user/mypage/Spinner.styled';

export const SpinnerWrapper = styled(SpinnerWrapperStyled)``;

export const Container = styled.section`
  margin-top: 2rem;
  margin-bottom: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const ToggleWrapper = styled.div``;

export const ShowMoreFAQWrapper = styled.div``;

export const ShowMoreFAQ = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;

  svg {
    width: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
  }
`;

export const ShowMoreSpan = styled.span`
  width: 100%;
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    animation: bounce 0.4s infinite;
  }
`;
