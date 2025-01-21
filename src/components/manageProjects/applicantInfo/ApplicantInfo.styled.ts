import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 270px;
  height: 550px;
  padding: 1.5rem;
  padding-bottom: 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .skillset-wrap {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 1.25rem;
`;

export const Label = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.deepGrey};
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 1rem;

  .period {
    color: ${({ theme }) => theme.color.deepGrey};
  }
`;
