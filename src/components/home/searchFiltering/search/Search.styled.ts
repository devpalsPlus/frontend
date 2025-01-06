import styled from 'styled-components';

export const Container = styled.div`
  width: 431px;
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 1.5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 42px;
  align-items: center;
  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
    input {
      width: 100%;
    }
    .searchIcon {
      svg {
        width: 26px;
      }
    }
  }
`;
