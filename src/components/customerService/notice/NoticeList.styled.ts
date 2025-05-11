import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
`;

export const Wrapper = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
  }
`;

export const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Date = styled.span`
  font-size: 1.1rem;
`;
