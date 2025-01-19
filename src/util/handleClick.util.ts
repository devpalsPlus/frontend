import { UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../models/createProject';

export const handleClick = (
  idx: number,
  setValue: UseFormSetValue<CreateProjectFormValues>,
  name: string,
  setData: React.Dispatch<React.SetStateAction<number[]>>
) => {
  setData((prev) => {
    const isAlreadySelected = prev.some((item) => item === idx);

    const updated = isAlreadySelected
      ? prev.filter((item) => item !== idx)
      : [...prev, idx];

    setValue(name, updated);
    return updated;
  });
};
