import {
  fetchMethodTag,
  fetchPositionTag,
} from './../api/projectSearchFiltering.api';
import { useQueries } from '@tanstack/react-query';
import { fetchSkillTag } from '../api/projectSearchFiltering.api';
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
        queryFn: async () => await fetchSkillTag(),
        staleTime: Infinity,
        gcTime: Infinity,
      },
      {
        queryKey: ['positionsData', positionTagsData],
        queryFn: async () => await fetchPositionTag(),
        staleTime: Infinity,
        gcTime: Infinity,
      },
      {
        queryKey: ['fetchMethodTag', methodTagsData],
        queryFn: async () => await fetchMethodTag(),
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
