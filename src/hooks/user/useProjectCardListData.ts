import { useQuery } from '@tanstack/react-query';
import { getProjectLists } from '../api/projectLists.api';
import { useSaveSearchFiltering } from './useSaveSearchFiltering';
export const useProjectCardListData = () => {
  const { searchFilters } = useSaveSearchFiltering();
  const {
    isError,
    isLoading,
    data: projectListsData,
  } = useQuery({
    queryKey: ['searchFilters', searchFilters],
    queryFn: () => getProjectLists(searchFilters),
  });

  return {
    isError,
    isLoading,
    projectListsData,
  };
};
