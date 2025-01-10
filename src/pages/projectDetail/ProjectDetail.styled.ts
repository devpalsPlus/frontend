import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial, sans-serif';
  color: #333;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const PostDate = styled.div`
  font-size: 14px;
  color: #777;
`;

export const ViewCount = styled.div`
  font-size: 14px;
  color: #777;
`;

export const Content = styled.div`
  margin-top: 20px;
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
  margin-top: 30px;
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

export const ActionButton = styled.button`
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
