import styled from 'styled-components';

export const SectionInput = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 1px;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 25px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    margin-bottom: 5px;
    margin-right: 10px;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    align-items: flex-start;
    margin-bottom: 15px;
  }
`;

export const InfoLabel = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
  color: #666;
  flex: 0.01;
  text-align: left;
  margin-right: 15px;
  white-space: nowrap;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    margin-right: 30px;
    margin-bottom: 8px;
    font-size: 0.9rem;
  }
`;

export const InfoText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  flex: 0.8;
  text-align: left;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 0.95rem;
    flex: 1;
  }
`;

export const SkillTagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  flex: 0.9;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
    width: 100%;
  }
`;

export const SkillTagImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 5px;

  img {
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    margin-bottom: 5px;
    margin-left: 10px;
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.color.primary};
    margin-top: 2px;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    img {
      width: 35px;
      height: 35px;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const BeginnerIcon = styled.img`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: #fff;
  padding: 5px;
  object-fit: contain;
  margin-bottom: 15px;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    width: 18px;
    height: 18px;
    margin-bottom: 10px;
  }
`;

export const BeginnerText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  flex: 0.8;
  text-align: left;
  margin-top: 20px;
`;
