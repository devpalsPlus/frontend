import { createContext, PropsWithChildren, useState } from 'react';
import { SearchFilters } from '../models/SearchFilters';

interface SearchFilteringContextType {
  searchFilters: SearchFilters;
  handleUpdateFilters: (key: string, filter: string | boolean) => void;
}

const SearchFilteringContext = createContext<SearchFilteringContextType | null>(
  null
);

export function SearchFilteringProvider({ children }: PropsWithChildren) {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    skillTag: '',
    position: '',
    method: '',
    beginner: false,
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
