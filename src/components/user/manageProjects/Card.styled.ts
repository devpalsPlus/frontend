import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 15rem;
  padding: 1.5rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  cursor: pointer;

  .buttonWrap {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: end;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.grey};
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    height: 14rem;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.fontSize};
    margin-bottom: 0.8rem;
  }
`;

export const RecruitmentDate = styled.small`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.color.deepGrey};
  margin-bottom: 0.25rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
    margin-bottom: 0.7rem;
  }
`;

export const TotalMember = styled.small`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.color.deepGrey};
  margin-bottom: 1.125rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
    margin-bottom: 1rem;
  }
`;

export const RecruitmentEnd = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;

  background-color: #ea6f6f;

  font-size: 0.9rem;
  color: #fff;

  font-size: 0.8rem;
  font-weight: 800;
`;

export const EvaluateButton = styled(Link)<{ $isCompleted: boolean }>`
  display: inline-flex;
  flex-shrink: 0;
  padding: 0.2rem 0.65rem;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? `#2ADE1D` : `#3e5879`};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  text-align: center;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 0.78rem;
  }
`;
