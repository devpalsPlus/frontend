import styled from 'styled-components';

export const WrapperNoContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const container = styled.section`
  height: 100%;
  padding: 2rem;
`;

export const WrapperNotifications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`;

export const WrapperNotification = styled.div<{ $enabled: boolean }>`
  display: flex;
  justify-content: space-between;
  color: ${({ $enabled, theme }) => $enabled && theme.color.placeholder};
`;

export const SpanNotification = styled.span<{ $enabled: boolean }>`
  position: relative;
  width: fit-content;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: ${({ $enabled, theme }) =>
      $enabled ? theme.color.placeholder : '#000'};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out 0.1s;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export const XButtonNotification = styled.button<{ $enabled: boolean }>`
  width: 1.5rem;
  color: ${({ $enabled, theme }) =>
    $enabled ? theme.color.placeholder : 'initial'};
`;
