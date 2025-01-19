import { XMarkIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';

export const Container = styled.div`
  width: 27rem;
  height: 2.9rem;
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 1.5rem;
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
    input {
      width: 100%;
    }

    .buttonWrapper {
      display: flex;
      gap: 0.4rem;
      .searchIcon {
        svg {
          width: 1.6rem;
        }
      }
    }
  }
`;
