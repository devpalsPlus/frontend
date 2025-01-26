import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.3rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  border: 1px solid #ededed;

  &:hover {
    background-color: #eee;
  }

  transition: background-color 0.2s ease-in-out;
`;

export const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  color: #201b1b;
  padding-right: 1rem;
`;

export const Status = styled.div<{ $isAccepted: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;

  background-color: ${({ $isAccepted }) =>
    $isAccepted ? '#6fbfa9' : '#ea6f6f'};

  font-size: 0.9rem;
  color: #fff;

  span {
    font-size: 0.8rem;
    font-weight: 800;
  }
`;
