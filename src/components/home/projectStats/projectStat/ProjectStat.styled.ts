import styled from 'styled-components';

export const Container = styled.div`
  width: 18.75rem;
  height: 7.25rem;
  display: flex;
  padding-left: 1.25rem;
  align-items: center;
  gap: 1rem;

  .border {
    width: 0.3rem;
    height: 4rem;
    background-color: #213555;
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
