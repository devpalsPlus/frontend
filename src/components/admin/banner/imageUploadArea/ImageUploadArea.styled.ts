import styled from 'styled-components';

export const ImageUploadArea = styled.div`
  position: relative;
  width: 280px;
  height: 120px;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border-color: #007bff;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
  display: block;
  margin: 0 auto;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const EditIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusButton = styled.button`
  width: 280px;
  height: 120px;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  background-color: transparent;
  color: #6c757d;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #007bff;
    color: #007bff;
    background-color: rgba(0, 123, 255, 0.05);
  }
`;
