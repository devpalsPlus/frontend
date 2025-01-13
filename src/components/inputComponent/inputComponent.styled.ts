import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.input`
  ${(props) => {
    switch (props.type) {
      case 'text':
        return `
          width: 100%;
          padding: 10px;
          border: 1px solid ${props.theme.color.border};
          border-radius: 13px;
        `;
      case 'date':
        return `
          flex: 0.1;
          padding: 10px 9px;
          border: 1px solid ${props.theme.color.border};
          border-radius: ${props.theme.borderRadius.primary};
          font-size: ${props.theme.heading.small};
          background-color: #ffffff;
          color: #aaa;
          font-family: 'Arial', sans-serif;

          &::placeholder {
            color: #aaa;
        }`;
      case 'textarea':
        return `
             width: 100%;
            height: 150px;
            padding: 12px;
            margin-top: 5px;
            border: 1px solid ${props.theme.color.border};
            border-radius: ${props.theme.borderRadius.primary};
            font-size: ${props.theme.heading.small};
            resize: none;
          `;
    }
  }}
`;

export const InputInfoStyle = styled.input`
  ${(props) => {
    switch (props.type) {
      case 'text':
        return `
            width: 180px;
            border: none;
            font-size: 0.8rem;
            text-align: left;
            padding-left: 1px;
        `;
      case 'number':
        return `
            width: 180px;
            border: none;
            font-size: 0.8rem;
            text-align: left;
            padding-left: 1px;`;

      case 'checkbox':
        return `
            width: 12px;
            height: 12px;
            cursor: pointer;
            padding-left: 10px;
            margin-left: 10px;
          `;
    }
  }}
`;

export const CareerInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #888;
  }

  &:nth-child(1) {
    flex: 1;
  }

  &:nth-child(2) {
    flex: 0.5;
    padding: 10px 9px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    font-size: ${({ theme }) => theme.heading.small};
    background-color: #ffffff;
    color: #aaa;
    font-family: 'Arial', sans-serif;

    &::placeholder {
      color: #aaa;
    }
  }

  &:nth-child(3) {
    flex: 0.5;
    padding: 10px 9px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    font-size: ${({ theme }) => theme.heading.small};
    background-color: #ffffff;
    color: #aaa;
    font-family: 'Arial', sans-serif;

    &::placeholder {
      color: #aaa;
    }
  }

  &:nth-child(4) {
    flex: 2;
  }
`;

export const PhoneInput = styled.input`
  width: 60px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  text-align: center;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  top: 100%;
  left: 0;
  white-space: nowrap;
`;
