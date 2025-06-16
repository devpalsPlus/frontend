import { useQueries } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import type { MethodTag, PositionTag, SkillTag } from '../../models/tags';
import {
  getMethodTag,
  getPositionTag,
  getSkillTag,
} from '../../api/projectSearchFiltering.api';
import { Tag } from '../queries/keys';

export const useSearchFilteringSkillTag = () => {
  const [skillTagsData, setSkillTagsData] = useState<SkillTag[]>([]);
  const [positionTagsData, setPositionTagsData] = useState<PositionTag[]>([]);
  const [methodTagsData, setMethodTagsData] = useState<MethodTag[]>([]);

  const queries = useQueries({
    queries: [
      {
        queryKey: Tag.skillTag,
        queryFn: () => getSkillTag(),
        staleTime: Infinity,
        gcTime: Infinity,
      },
      {
        queryKey: Tag.positionTag,
        queryFn: () => getPositionTag(),
        staleTime: Infinity,
        gcTime: Infinity,
      },
      {
        queryKey: Tag.method,
        queryFn: () => getMethodTag(),
        staleTime: Infinity,
        gcTime: Infinity,
      },
    ],
  });

  const [skillQuery, positionQuery, methodQuery] = queries;

  useEffect(() => {
    if (!skillQuery.data || !positionQuery.data || !methodQuery.data) return;
    setSkillTagsData(skillQuery.data);
    setPositionTagsData(positionQuery.data);
    setMethodTagsData(methodQuery.data);
  }, [skillQuery.data, positionQuery.data, methodQuery.data]);

  return { skillTagsData, positionTagsData, methodTagsData };
};
