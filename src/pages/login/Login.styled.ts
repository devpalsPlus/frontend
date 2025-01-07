import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    margin: 4rem 0 2.5rem;
  }
  
  form {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    max-width: 300px;
    width: 100%;
    border-radius: 30px;
    padding: 0.75rem 0.625rem;
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.buttonScheme['primary'].bg};
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const InputWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  margin-bottom: 30px;
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
  visibility: ${({ message }) => (message ? 'visible' : 'hidden')};
  opacity: ${({ message }) => (message ? 1 : 0)};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

export const WrapperPassword = styled.div`
  width: 30%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 15px 0 20px;

  a {
    span {
      color: #3E5879;
    }
  }
`;

export const WrapperRegister = styled.div`
  width: 30%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  p {
    text-align: center;
    margin-bottom: 20px;
  }
`;