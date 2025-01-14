import { useQuery } from '@tanstack/react-query';
import { fetchProjectLists } from '../api/projectLists.api';
import { useSaveSearchFiltering } from './useSaveSearchFiltering';

export const useProjectCardListData = () => {
  const { searchFilters } = useSaveSearchFiltering();
  const {
    isError,
    isLoading,
    data: projectListsData,
  } = useQuery({
    queryKey: ['searchFilters', JSON.stringify(searchFilters)],
    queryFn: () => fetchProjectLists(searchFilters),
    enabled: !!searchFilters,
  });

  return {
    isError,
    isLoading,
    projectListsData,
  };
};
