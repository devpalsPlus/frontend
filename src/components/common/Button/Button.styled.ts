import styled from 'styled-components';
import { ButtonProps } from './Button';

export const CommonButton = styled.button<Omit<ButtonProps, 'children'>>`
  font-size: ${({ theme, size }) => theme.buttonSize[size].fontSize};
  padding: ${({ theme, size }) => theme.buttonSize[size].padding};
  color: ${({ theme, schema }) => theme.buttonScheme[schema].color};
  background-color: ${({ theme, schema }) => theme.buttonScheme[schema].bg};
  border-radius: ${({ theme, radius }) => theme.borderRadius[radius]};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;
