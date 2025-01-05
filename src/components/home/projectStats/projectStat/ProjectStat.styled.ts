import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 116px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  gap: 1rem;

  .border {
    width: 5px;
    height: 65px;
    background-color: #213555;
  }

  .stat {
    .number {
      font-size: 2rem;
      font-weight: bold;
    }
    .title {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
