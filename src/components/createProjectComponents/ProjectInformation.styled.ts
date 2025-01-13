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
    font-size: 0.8rem;
    font-weight: bold;
    color: #666;
    flex: 0.08;
    text-align: left;
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
    color: #000;
    flex: 0.8;
    text-align: left;
  }

  img {
    width: 30px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const BeginnerIcon = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 5px;
  object-fit: contain;
  margin-bottom: 15px;
`;
