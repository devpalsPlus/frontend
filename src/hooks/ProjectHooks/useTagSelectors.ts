import { useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../models/createProject';
import { Skill } from '../../models/projectDetail';
import { Position } from '../../models/projectDetail';

interface useTagSelectorsProps {
  apiTagData?: Skill[] | Position[] | number;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  fieldName: 'field' | 'position' | 'languages';
}

const useTagSelectors = ({
  apiTagData,
  setValue,
  fieldName,
}: useTagSelectorsProps) => {
  const [selectedTag, setsSelectedTag] = useState<number[]>([]);

  useEffect(() => {
    if (!apiTagData) return;

    if (Array.isArray(apiTagData)) {
      const ids = apiTagData.map((item) => item.id);
      setsSelectedTag(ids);
      setValue(fieldName, ids);
    } else {
      setsSelectedTag(apiTagData ? [apiTagData - 1] : []);
      setValue(fieldName, apiTagData ?? null);
    }
  }, [apiTagData, fieldName, setValue]);

  const handleClick = (e: React.MouseEvent<HTMLElement>, idx: number) => {
    if (fieldName === 'languages') {
      e.stopPropagation();
      const target = e.target as HTMLElement;

      const id = Number(
        target.dataset.id ||
          target.closest('[data-id]')?.getAttribute('data-id')
      );
      if (!id) return;

      setsSelectedTag((prev) => {
        const isAlreadySelected = prev.some((item) => item === id);

        const updated = isAlreadySelected
          ? prev.filter((item) => item !== id)
          : [...prev, id];

        setValue(fieldName, updated);
        return updated;
      });
    } else if (fieldName === 'position') {
      setsSelectedTag((prev) => {
        const isAlreadySelected = prev.some((item) => item === idx);

        const updated = isAlreadySelected
          ? prev.filter((item) => item !== idx)
          : [...prev, idx];

        setValue(fieldName, updated);
        return updated;
      });
    } else {
      setsSelectedTag([idx]);

      setValue(fieldName, idx);
    }
  };

  return { selectedTag, handleClick };
};

export default useTagSelectors;
