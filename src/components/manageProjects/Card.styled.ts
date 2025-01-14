import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 21rem;
  height: 15rem;
  padding: 1.5rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  cursor: pointer;

  .buttonWrap {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.grey};
  }
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
`;

export const RecruitmentDate = styled.small`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.deepgrey};
  margin-bottom: 0.25rem;
`;

export const TotalMember = styled.small`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.deepgrey};
  margin-bottom: 1.125rem;
`;
