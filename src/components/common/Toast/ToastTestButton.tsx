import styled from 'styled-components';
import { useToast } from '../../../hooks/useToast';

const TestButton = styled.button`
  margin-left: 16px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.color.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const ToastTestButton = () => {
  const { showToast } = useToast();

  const handleClick = () => {
    showToast('🛎️ 이건 테스트 토스트 메시지입니다!', 4000);
  };

  return <TestButton onClick={handleClick}>토스트 확인</TestButton>;
};

export default ToastTestButton;
