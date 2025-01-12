import { createContext, PropsWithChildren, useState } from 'react';
import type { SearchFilters } from '../models/searchFilters';

interface SearchFilteringContextType {
  searchFilters: SearchFilters;
  handleUpdateFilters: (key: string, filter: string | boolean) => void;
}

const SearchFilteringContext = createContext<SearchFilteringContextType | null>(
  null
);

export function SearchFilteringProvider({ children }: PropsWithChildren) {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    skillTag: [],
    positionTag: null,
    method: null,
    isBeginner: false,
    page: 1,
  });

  const handleUpdateFilters = (key: string, filter: string | boolean) => {
    setSearchFilters((prev) => ({ ...prev, [key]: filter }));
  };

  return (
    <SearchFilteringContext.Provider
      value={{ searchFilters, handleUpdateFilters }}
    >
      {children}
    </SearchFilteringContext.Provider>
  );
}

export default SearchFilteringContext;
