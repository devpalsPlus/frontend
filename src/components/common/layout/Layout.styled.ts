import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.desktop};
  padding: 0px 120px;
`;
