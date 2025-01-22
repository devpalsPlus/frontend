import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border: 2px solid #f0f0f0;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  width: 80%;
  min-width: 530px;
  height: 80vh;
  padding-bottom: 1rem;
`;
