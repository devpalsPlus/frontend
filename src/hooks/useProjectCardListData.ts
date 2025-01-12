import { useQuery } from '@tanstack/react-query';
import { fetchProjectLists } from '../api/projectLists.api';
import { useEffect, useState } from 'react';
import { ProjectList } from '../models/mainProjectLists';

export const useProjectCardListData = () => {
  const [projectListsData, setProjectListsData] = useState<
    ProjectList[] | undefined
  >(undefined);
  const { isError, isLoading, data } = useQuery({
    queryKey: ['searchFiltering'],
    queryFn: async () =>
      await fetchProjectLists({
        isBeginner: false,
        page: 1,
      }),
  });

  useEffect(() => {
    if (data) {
      setProjectListsData(data?.projects);
    }
  }, [data]);

  return {
    isError,
    isLoading,
    projectListsData,
  };
};
