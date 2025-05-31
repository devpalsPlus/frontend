import styled from 'styled-components';
import Button from '../../common/Button/Button';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SidebarLeft = styled.div`
  width: 240px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;

  @media (max-width: 1100px) {
    width: 190px;
  }
`;

export const ProjectName = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ParticipantButton = styled.button<{ $active?: boolean }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ $active }) => ($active ? '#2a3f5f' : '#3e5c7c')};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px 40px;
`;

export const Header = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
  }

  @media (max-width: 1100px) {
    margin-bottom: 3px;
  }
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 24px;
  margin: 0;
`;

export const MessageContainer = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    justify-content: right;
    margin-bottom: 30px;
  }

  @media (max-width: 1100px) {
    margin-bottom: 30px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 11px;
  margin: 0 10px 0 0;
  color: ${({ theme }) => theme.color.red};
`;

export const SubmitButton = styled(Button)`
  padding: 8px 16px;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 16px;
  padding-bottom: 70px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
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
  margin-bottom: 6px;
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

  @media (max-width: 1100px) {
    width: 190px;
  }
`;

export const CompletedTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CompletedButton = styled.button<{ $active?: boolean }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ $active }) => ($active ? '#3e5c7c' : '#f0f0f0')};
  color: ${({ $active }) => ($active ? '#fff' : '#999')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: '#e0e0e0'};
  }
`;
