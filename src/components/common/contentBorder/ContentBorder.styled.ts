import styled from 'styled-components';

export const ContentBorder = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${({ theme }) => theme.color.placeholder};
  position: relative;
  z-index: 1;
`;
