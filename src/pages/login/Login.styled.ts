import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    margin: 5rem 0 2.5rem;
  }
  
  form {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  fieldset {
    max-width: 300px;
    width: 100%;
    border: 1px solid #c2c2c2;
    border-radius: 30px;
    padding: 0.6rem 0.625rem;
    margin-bottom: 25px;
  }
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: #c2c2c2;
    margin-right: 10px;
  }

  button {
    max-width: 300px;
    width: 100%;
    border-radius: 30px;
    padding: 0.7rem 0.625rem;
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.buttonScheme['primary'].bg};
    font-size: 1rem;
    font-weight: 600;
  }
`;

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