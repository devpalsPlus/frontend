import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.input<{ type?: string }>`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  font-size: ${({ theme }) => theme.heading.small.fontSize};

  ${({ type }) => {
    switch (type) {
      case 'text':
        return css`
          width: 100%;
          border-radius: 13px;
        `;
      case 'date':
        return css`
          flex: 0.1;
          background-color: #ffffff;
          color: #aaa;

          &::placeholder {
            color: #aaa;
          }
        `;
      case 'textarea':
        return css`
          width: 100%;
          height: 150px;
          margin-top: 5px;
          resize: none;
        `;
    }
  }}
`;

export const InputInfoStyle = styled.input<{ type?: string }>`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  border: none;

  ${({ type }) => {
    switch (type) {
      case 'text':
        return css`
          width: 220px;
          text-align: left;
          padding-left: 1px;
        `;
      case 'number':
        return css`
          width: 220px;
          text-align: left;
          padding-left: 1px;
        `;

      case 'checkbox':
        return css`
          width: 15px;
          height: 15px;
          cursor: pointer;
          padding-left: 10px;
          margin-left: 5px;
        `;
    }
  }}
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  top: 115%;
  left: 5px;
  white-space: nowrap;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
  }
`;
