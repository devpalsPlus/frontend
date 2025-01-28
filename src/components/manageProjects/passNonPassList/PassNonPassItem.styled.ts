import styled from 'styled-components';

export const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  &:hover {
    background-color: ${({ theme }) => theme.color.navy};
    color: ${({ theme }) => theme.color.white};
  }

  svg {
    color: #e69191;
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const NickName = styled.p`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: 400;
`;

export const DeleteButton = styled.button``;
