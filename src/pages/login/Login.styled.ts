import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: ${({ theme }) => theme.layout.width.desktop};
  min-width: 22rem;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 6.5rem;
    height: 6.5rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  button {
    max-width: 22rem;
    width: 100%;
    padding: 0.8rem 0.625rem;
    font-weight: 600;
  }
`;

export const LogoH1 = styled.h1``;

export const MoveHomeLink = styled(Link)`
  padding-bottom: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  min-width: 22rem;
  gap: 0.6rem;

  button {
    align-self: baseline;
    padding: 0.9rem 1rem;
    font-size: 0.9rem;
    width: 30%;
  }
`;

export const InputWrapper = styled.div`
  max-width: 22rem;
  width: inherit;
  margin-bottom: 1.875rem;
  position: relative;
`;

export const ErrorMessage = styled.span<{ message?: string }>`
  position: absolute;
  bottom: -1.5rem;
  left: 1rem;
  display: inline-block;
  color: #d43636;
  font-size: 0.7rem;
  height: 1.2rem;
`;

export const WrapperPassword = styled.div`
  width: 100%;
  max-width: 22rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 0.938rem 0 1.25rem;

  a {
    span {
      color: #3e5879;
    }
  }
`;

export const WrapperRegister = styled.div`
  width: 100%;
  max-width: 310px;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  p {
    text-align: center;
    margin-bottom: 1.25rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const OauthButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: block;
  width: 5rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const LoginSuccessContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
