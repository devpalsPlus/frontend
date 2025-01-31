import styled from 'styled-components';
import Button from '../../components/common/Button/Button';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 25px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 27px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 20px;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 22px;
  }
`;

export const Dates = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.color.placeholder};
  margin-bottom: 50px;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 16px;
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
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 18px;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100px;
  padding: 15px;
  margin: 0 auto;
  cursor: pointer;
`;
