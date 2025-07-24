import { useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import type { CreateProjectFormValues } from '../../../models/createProject';
import type { PositionTag, SkillTag } from '../../../models/tags';
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
      // 전체(인덱스 1)를 클릭하는 경우
      if (idx === 1) {
        // 이미 전체가 선택되어 있으면 해제
        if (selectedTag.includes(1)) {
          const updated = selectedTag.filter((item) => item !== 1);
          setSelectedTag(updated);
          setValue(fieldName, updated);
          return;
        }

        // 다른 카테고리가 선택되어 있으면 확인 메시지 표시
        if (selectedTag.length > 0 && !selectedTag.includes(1)) {
          const confirmed = window.confirm('선택된 카테고리가 해제됩니다.');
          if (!confirmed) {
            return;
          }
        }

        // 전체 선택
        setSelectedTag([1]);
        setValue(fieldName, [1]);
        return;
      }

      // 다른 카테고리를 클릭하는 경우
      setSelectedTag((prev) => {
        // 전체가 선택되어 있으면 전체 해제하고 해당 카테고리 선택
        if (prev.includes(1)) {
          const updated = [idx];
          setValue(fieldName, updated);
          return updated;
        }

        // 일반적인 토글 로직
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
  };

  return { selectedTag, handleClick };
};

export default useTagSelectors;
