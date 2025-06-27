import styled from 'styled-components';

export const LookupContainer = styled.nav`
  width: 80%;
  margin-bottom: 1rem;

  input[type='date'] {
    position: relative;
    padding: 14px;
    width: 150px;
    height: 30px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.placeholder};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
  }
`;

export const LookupWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const LookupUser = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.color.placeholder};
  width: fit-content;
`;

export const LookupDateWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LookupStartDate = styled.input``;

export const LookupJoinDate = styled.span``;

export const LookupEndDate = styled.input``;

export const LookupIconWrapper = styled.div`
  display: flex;
  gap: 2rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const IconDefault = styled.button`
  color: ${({ theme }) => theme.color.deepGrey};
`;

export const IconSearch = styled.button`
  color: ${({ theme }) => theme.color.deepGrey};
`;
