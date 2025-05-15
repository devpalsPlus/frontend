import styled from 'styled-components';

export const ScrollWrapper = styled.div<{ $height: string }>`
  width: 100%;
  height: calc(100% - ${({ $height }) => $height});
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.color.lightgrey};
  border-radius: ${({ theme }) => theme.borderRadius.large};

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
