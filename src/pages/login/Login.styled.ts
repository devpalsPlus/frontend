import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    margin: 3rem 0 2.5rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    max-width: 310px;
    width: 100%;
    border-radius: 30px;
    padding: 0.8rem 0.625rem;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.buttonScheme['primary'].bg};
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 0.6rem;

  button {
    max-width: 110px;
    width: 50%;
    align-self: baseline;
    padding: 0.9rem 1rem;
    font-size: 0.9rem;
  }
`;

export const InputWrapper = styled.div`
  max-width: 310px;
  width: 100%;
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
  max-width: 310px;
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
