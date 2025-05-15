import MDEditor from '@uiw/react-md-editor';
import styled from 'styled-components';

export const StyledMDEditor = styled(MDEditor)`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ theme }) => theme.color.white};
  padding: 10px;
`;
