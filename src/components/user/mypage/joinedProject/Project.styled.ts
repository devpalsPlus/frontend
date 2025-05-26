import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  padding: 1.8rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid #ededed;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 1.3rem;
  }

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

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  span {
    font-size: 0.9rem;
    color: #777777;

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: 0.7rem;
    }
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.65rem;
  background-color: #3e5879;
  border-radius: 10px;
  text-align: center;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 0.3rem;
  }

  span {
    font-weight: 500;
    font-size: 0.78rem;
    color: #fff;
    word-break: keep-all;

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: 0.6rem;
    }
  }
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;

  span {
    font-size: 0.9rem;

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: 0.7rem;
    }
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
  align-items: center;
  justify-content: space-between;
`;

export const SkillArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 0.2rem;
  }

  img {
    width: 40px;
    height: 40px;
    border: 1px solid rgb(196 196 196);
    border-radius: 50%;

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      width: 27px;
      height: 27px;
    }
  }

  svg {
    color: rgb(196 196 196);
  }
`;

export const EvaluateButton = styled(Link)`
  display: inline-flex;
  flex-shrink: 0;
  padding: 0.2rem 0.65rem;
  background-color: #3e5879;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  text-align: center;
  margin-left: auto;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 0.78rem;
  }
`;
