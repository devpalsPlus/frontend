import styled, { css } from 'styled-components';
import Button from '../../common/Button/Button';

export const AddButtonContainer = styled.div``;

export const AddButton = styled(Button)``;

export const Container = styled.table<{ $header?: boolean }>`
  border-collapse: collapse;
  table-layout: fixed;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  margin-top: 10rem;
`;

export const TableHeader = styled.thead`
  color: #ffffff;
`;

export const TableHeaderCell = styled.th`
  padding: 16px;
  font-size: 14px;
  text-align: center;
`;

export const ScrollBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 14px;
  font-size: 14px;
  text-align: center;
  color: #333;
  vertical-align: middle;
`;

export const ImageCell = styled(TableCell)`
  position: relative;
  height: 120px;
  padding: 0;
  width: 280px;
`;

export const ImageUploadArea = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const EditIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ImageLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 600;
  font-size: 15px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
`;

export const PlusButton = styled.div`
  width: 100%;
  height: 120px;
  border: 2px dashed #ccc;
  font-size: 32px;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #6c5ce7;
    color: #6c5ce7;
    background-color: rgba(108, 92, 231, 0.1);
  }
`;

export const ToggleSwitch = styled.div`
  position: relative;
  width: 50px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  label {
    position: absolute;
    background: #ccc;
    border-radius: 999px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  label::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
  }

  input:checked + label {
    background-color: #6c5ce7;
  }

  input:checked + label::after {
    transform: translateX(26px);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 14px;

  input {
    display: none;
  }

  label {
    position: relative;
    padding-left: 22px;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 2px;
      width: 16px;
      height: 16px;
      border: 2px solid #666;
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 6px;
      width: 8px;
      height: 8px;
      background-color: #6c5ce7;
      border-radius: 50%;
      opacity: 0;
    }
  }

  input:checked + label::after {
    opacity: 1;
  }
`;

export const DateRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span {
    font-size: 14px;
  }
`;
export const DateInput = styled.input`
  width: 120px;
  height: 36px;
  padding: 0 12px;
  font-size: 14px;
  border-radius: 18px;
  border: 1px solid #ccc;
`;

const buttonBase = css`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white};
`;

export const EditButton = styled.button`
  ${buttonBase};
  background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
  margin-right: 8px;
`;

export const DeleteButton = styled.button`
  ${buttonBase};
  background-color: ${({ theme }) => theme.color.red};
`;

export const TableBody = styled.tbody``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CreateButton = styled(Button)``;

export const CancelButton = styled(Button)``;
