import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const Wrapper = styled.div`
  width: calc(100% - 22% - 1.25rem);
  min-width: 230px;
  height: 80vh;
  border: 2px solid #f0f0f0;
  border-radius: 30px;
  padding: 2rem;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #3e5879;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(65, 100, 146);
  }
`;
