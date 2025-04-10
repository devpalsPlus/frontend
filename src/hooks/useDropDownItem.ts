import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useDropDownItem = (commandId?: number) => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const onReport = () => {
    console.log('신고하기');
    // navigate('');
  };

  const onEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const onDelete = () => {};
  return { onReport, onEdit, onDelete, isEditMode };
};

export default useDropDownItem;
