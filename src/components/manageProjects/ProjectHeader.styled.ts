import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

export const RecruitmentEnd = styled.h3`
  margin-left: 1.2rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.red};
  flex-shrink: 0;
`;
