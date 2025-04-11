import {
  getMethodTag,
  getPositionTag,
} from './../api/projectSearchFiltering.api';
import { useQueries } from '@tanstack/react-query';
import { getSkillTag } from '../api/projectSearchFiltering.api';
import { useEffect, useState } from 'react';
import type { MethodTag, PositionTag, SkillTag } from '../models/tags';

export const useSearchFilteringSkillTag = () => {
  const [skillTagsData, setSkillTagsData] = useState<SkillTag[]>([]);
  const [positionTagsData, setPositionTagsData] = useState<PositionTag[]>([]);
  const [methodTagsData, setMethodTagsData] = useState<MethodTag[]>([]);

  const queries = useQueries({
    queries: [
      {
        queryKey: ['skillTagsData', skillTagsData],
        queryFn: async () => await getSkillTag(),
        staleTime: Infinity,
        gcTime: Infinity,
      },
      {
        queryKey: ['positionsData', positionTagsData],
        queryFn: async () => await getPositionTag(),
        staleTime: Infinity,
        gcTime: Infinity,
      },
      {
        queryKey: ['fetchMethodTag', methodTagsData],
        queryFn: async () => await getMethodTag(),
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
