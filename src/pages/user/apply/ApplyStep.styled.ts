import styled from 'styled-components';
import Button from '../../components/common/Button/Button';

export const Container = styled.div`
  max-width: 100%;
  padding: 40px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 50px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 20px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.4rem;
  }
`;

export const Dates = styled.p`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  color: ${({ theme }) => theme.color.placeholder};
  margin-bottom: 50px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.fontSize};
  }
`;

export const StepContainer = styled.div`
  margin-bottom: 20px;
`;

export const StepButton = styled.div`
  display: flex;
  justify-content: right;
  gap: 20px;
`;

export const StepLabel = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 10px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.1rem;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled(Button)`
  padding: 15px;
  margin: 0 auto;
  cursor: pointer;
`;
