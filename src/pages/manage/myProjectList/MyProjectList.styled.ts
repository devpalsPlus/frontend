import styled from 'styled-components';

export const ManageProjectsContainer = styled.div`
  display: block;
  padding-top: 4.375em;
  max-width: 1048px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 692px;
  }
`;

export const TitleWrapper = styled.header`
  margin-bottom: 2rem;
`;
