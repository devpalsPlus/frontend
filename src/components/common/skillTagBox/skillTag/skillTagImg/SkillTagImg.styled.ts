import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 2rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 2rem;
  }
`;
