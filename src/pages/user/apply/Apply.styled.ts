import styled from 'styled-components';
import Button from '../../../components/common/Button/Button';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.1rem;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100px;
  padding: 15px;
  margin: 0 auto;
  cursor: pointer;
`;
