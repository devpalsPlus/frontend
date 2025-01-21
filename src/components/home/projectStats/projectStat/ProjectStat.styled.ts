import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding-left: 1.25rem;
  align-items: center;
  gap: 1rem;

  .border {
    width: 0.3rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.color.navy};
  }

  .stat {
    .number {
      font-size: 2rem;
      font-weight: bold;
    }
    .title {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
`;
