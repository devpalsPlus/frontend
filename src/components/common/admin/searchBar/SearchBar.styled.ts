import styled from 'styled-components';

export const AdminSearchBarContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const AdminSearchBarWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.deepGrey};
  border-radius: ${({ theme }) => theme.borderRadius.large} 0 0
    ${({ theme }) => theme.borderRadius.large};
`;

export const AdminSearchBarInput = styled.input`
  width: 100%;
  font-size: 1.3rem;
`;

export const AdminSearchBarBackIcon = styled.button`
  svg {
    width: 1.5rem;
  }
`;

export const AdminSearchBarButton = styled.button`
  width: 10%;
  border: 1px solid ${({ theme }) => theme.color.navy};
  background: ${({ theme }) => theme.color.navy};
  border-radius: 0 ${({ theme }) => theme.borderRadius.large}
    ${({ theme }) => theme.borderRadius.large} 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.white};
  padding: 0.5rem 1rem 0.5rem 0.5rem;
`;
