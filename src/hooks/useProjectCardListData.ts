import { useQuery } from '@tanstack/react-query';
import { fetchProjectLists } from '../api/projectLists.api';
import type { SearchFilters } from '../models/SearchFilters';

export const useProjectCardListData = (filter: SearchFilters) => {
  const {
    isError,
    isLoading,
    data: projectListsData,
  } = useQuery({
    queryKey: ['searchFilters', filter],
    queryFn: () => fetchProjectLists(filter),
  });

  return {
    isError,
    isLoading,
    projectListsData: projectListsData?.projects,
  };
};
