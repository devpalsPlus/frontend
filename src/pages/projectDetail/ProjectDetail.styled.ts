import styled from 'styled-components';
import Button from '../../components/common/Button/Button';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 25px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 3rem;
  width: 75%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 28px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ProfileImageContainer = styled.div`
  padding-right: 15px;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const UserName = styled.div`
  font-size: ${({ theme }) => theme.heading['small'].fontSize};
  font-weight: bold;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 18px;
  }
`;

export const PostDate = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.deepGrey};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 0.8rem;
  }
`;

export const ViewCount = styled.div`
  display: flex;
  gap: 5px;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.deepGrey};

  svg {
    margin-top: 4px;
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.color.deepGrey};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 0.9rem;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 60px;
`;

export const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px 20px;
  margin-bottom: 20px;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #555;
`;

export const Value = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const ProjectDescription = styled.div`
  margin-top: 4rem;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
`;

export const ApplyButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;

  button {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.8rem 1.8rem;
  }
`;

export const ActionButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
