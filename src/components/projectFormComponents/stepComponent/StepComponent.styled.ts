import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 50px;
  margin: 20px 0;
`;

export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.color.primary};
  transform: translateY(-50%);
  z-index: 0;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Circle = styled.div<{ isActive: boolean }>`
  z-index: 1;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid
    ${({ isActive, theme }) => (isActive ? theme.color.primary : '#ccc')};
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  color: #333;
  font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
  margin-top: 5px;
`;
