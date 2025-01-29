import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.desktop};
  padding: 0 120px;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 0 60px;
  }
`;
