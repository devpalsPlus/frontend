import styled from 'styled-components';

export const Container = styled.div``;

export const SearchBar = styled.div`
  margin-top: 20px;
`;

export const ScrollArea = styled.div`
  height: calc(100vh - 200px);
  overflow-y: auto;
  padding-bottom: 100px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  padding: 20px;
`;
