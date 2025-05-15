import { useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../../models/createProject';
import { PositionTag, SkillTag } from '../../../models/tags';
<<<<<<< HEAD
=======

>>>>>>> 4069f4a (chore: 디렉토리 변경에 따른  경로수정)
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
        if (prev.includes(1) && idx !== 1) {
          return prev;
        }

        if (idx === 1) {
          const updated = prev.includes(1) ? [] : [1];
          setValue(fieldName, updated);
          return updated;
        }

        const isAlreadySelected = prev.includes(idx);
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

    console.log(selectedTag);
  };

  return { selectedTag, handleClick };
};

export default useTagSelectors;
