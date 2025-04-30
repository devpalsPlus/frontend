import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 3px;
`;

export const ScrollArea = styled.div`
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const NonContentsMessage = styled.p`
  margin-left: 6px;
`;

export const Line = styled.hr`
  opacity: 60%;
  border-width: 1px;
`;
