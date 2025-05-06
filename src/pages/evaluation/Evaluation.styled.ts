import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const SidebarLeft = styled.div`
  width: 240px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
`;

export const ProjectName = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ParticipantButton = styled.button<{ active?: boolean }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ active }) => (active ? '#2a3f5f' : '#3e5c7c')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 24px;
  margin: 0;
`;

export const Subtitle = styled.p`
  margin: 0 20px 0 0;
  color: #666;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #3e5c7c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const QuestionBlock = styled.div`
  margin-bottom: 40px;
`;

export const QuestionHeader = styled.div`
  background-color: #f0f0f0;
  padding: 12px;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const Radio = styled.input`
  display: none;

  &:checked + span {
    background-color: #3e5c7c;
    color: #fff;
  }
`;

export const RadioLabel = styled.span`
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 8px;
  cursor: pointer;
`;

export const OptionLabel = styled.span`
  font-size: 14px;
  color: #333;
`;

export const SidebarRight = styled.div`
  width: 200px;
  border-left: 1px solid #e0e0e0;
  padding: 20px;
  background-color: #fff;
`;

export const CompletedTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CompletedButton = styled.button<{ active?: boolean }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ active }) => (active ? '#3e5c7c' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#999')};
  border: none;
  border-radius: 4px;
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ active }) => (active ? '#2f4a6b' : '#e0e0e0')};
  }
`;
