import styled from 'styled-components';

export const SectionInput = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    font-size: 1.1rem;
    font-weight: bold;
    color: #666;
    flex: 0.08;
    text-align: left;
  }

  img {
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 50%;
    margin-bottom: 5px;
    margin-right: 10px;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    flex: 0.8;
    text-align: left;
  }
`;

export const SkillTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

export const SkillTagImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 50%;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const BeginnerIcon = styled.img`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 5px;
  object-fit: contain;
  margin-bottom: 15px;
`;
