import styled, { css } from 'styled-components';
import {
  AdminDropdownWrapper,
  AdminLink,
  AdminLinkWrapper,
} from '../../noticeDetail/content/NoticeDetailContent.styled';

export const ListContainer = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
`;

export const ListTitle = styled.div`
  font-size: 1.2rem;
  padding-left: 1.5rem;
  font-weight: bold;
`;

export const ListPlusIcon = styled.div<{ $isOpen: boolean }>`
  margin-right: 1.5rem;
  transition: transform 500ms ease-in-out;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(45deg);
    `}
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ListContentWrapper = styled.div<{ $isShowContent: boolean }>`
  position: relative;
  max-height: 0;
  overflow: hidden;

  @keyframes slice-show {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  ${({ $isShowContent }) =>
    $isShowContent &&
    css`
      max-height: 100vh;
      opacity: 1;
      cursor: auto;
      background: ${({ theme }) => theme.color.lightgrey};
      padding: 1.5rem 1rem;
      display: flex;
      gap: 0.5rem;
      animation: slice-show 300ms;
    `}
`;

export const ListButtonWrapper = styled.div`
  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const ListContent = styled.div`
  font-size: 1.1rem;
  padding-right: 1.5rem;
  white-space: pre-wrap;
`;

export const AdminFAQDropdownWrapper = styled(AdminDropdownWrapper)`
  position: absolute;
  right: 1.5rem;
  width: fit-content;
  height: fit-content;
`;

export const AdminFAQAuthButton = styled.button`
  width: fit-content;
  height: fit-content;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const AdminFAQLinkWrapper = styled(AdminLinkWrapper)`
  top: -2.5rem;
  left: -6.7rem;
  flex-direction: row;
`;

export const AdminFAQLink = styled(AdminLink)``;
