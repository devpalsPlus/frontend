import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  padding: 1.8rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid #ededed;
  width: 100%;

  &:hover {
    background-color: #eee;
  }

  transition: background-color 0.2s ease-in-out;
`;

export const Title = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 1.2rem;
  font-weight: 600;

  margin-bottom: 1rem;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  span {
    font-size: 0.9rem;
    color: #777777;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.65rem;
  background-color: #3e5879;
  border-radius: 10px;

  span {
    font-weight: 500;
    font-size: 0.78rem;
    color: #fff;
  }
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;

  span {
    font-size: 0.9rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const Beginner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const State = styled.span`
  color: rgb(23, 38, 58);
  font-weight: 600;
`;

export const Skill = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;

  img {
    width: 40px;
    border: 1px solid rgb(196 196 196);
    border-radius: 50%;
  }

  svg {
    color: rgb(196 196 196);
  }
`;
