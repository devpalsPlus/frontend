import styled from 'styled-components';
import notFoundImg from '../../../../assets/notFoundImg.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${notFoundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #3e404d;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
