import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
`;

export const CRUDContainer = styled.section`
  width: 90%;
  min-height: 11rem;
  border: 1px solid ${({ theme }) => theme.color.placeholder};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  justify-content: center;
  padding: 2rem 3rem;
`;

export const ItemContainer = styled.section`
  width: 90%;
  border: 1px solid ${({ theme }) => theme.color.placeholder};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;
