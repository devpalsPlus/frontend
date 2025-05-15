import { useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../models/createProject';
import { PositionTag, SkillTag } from '../../models/tags';

interface useTagSelectorsProps {
  apiTagData?: SkillTag[] | PositionTag[] | number;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  fieldName: 'field' | 'position' | 'languages';
}

const useTagSelectors = ({
  apiTagData,
  setValue,
  fieldName,
}: useTagSelectorsProps) => {
  const [selectedTag, setSelectedTag] = useState<number[]>([]);

  useEffect(() => {
    if (!apiTagData) return;

    if (Array.isArray(apiTagData)) {
      const ids = apiTagData.map((item) => item.id);
      setSelectedTag(ids);
      setValue(fieldName, ids);
    } else {
      const id = typeof apiTagData === 'number' ? apiTagData : null;
      if (id === null) return;
      setSelectedTag(id ? [id - 1] : []);
      setValue(fieldName, id);
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

      setSelectedTag((prev) => {
        const isAlreadySelected = prev.some((item) => item === id);

        const updated = isAlreadySelected
          ? prev.filter((item) => item !== id)
          : [...prev, id];

        setValue(fieldName, updated);
        return updated;
      });
    } else if (fieldName === 'position') {
      setSelectedTag((prev) => {
        const isAlreadySelected = prev.some((item) => item === idx);

        const updated = isAlreadySelected
          ? prev.filter((item) => item !== idx)
          : [...prev, idx];

        setValue(fieldName, updated);
        return updated;
      });
    } else {
      setSelectedTag([idx]);

      setValue(fieldName, idx);
    }
  };

  return { selectedTag, handleClick };
};

export default useTagSelectors;
