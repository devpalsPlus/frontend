import styled, { keyframes } from 'styled-components';
export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.width.desktop};
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.lightnavy},
    ${({ theme }) => theme.color.white}
  );
`;

export const ImgWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const landingImg = styled.img`
  width: 300px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.heading.large.fontSize};
  color: ${({ theme }) => theme.color.navy};
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  :nth-child(1) {
    margin-right: 10px;
  }
`;
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.5rem);
  }
`;

export const DownArrow = styled.img`
  width: 60px;
  animation: ${bounce} 1.5s ease-in-out infinite;
  cursor: pointer;
`;
