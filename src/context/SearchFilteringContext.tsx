import { createContext, PropsWithChildren, useState } from 'react';
import type { SearchFilters } from '../models/searchFilters';

type SearchFilteringKey =
  | 'skillTag'
  | 'positionTag'
  | 'method'
  | 'isBeginner'
  | 'page';

interface SearchFilteringContextType {
  searchFilters: SearchFilters;
  handleUpdateFilters: (
    key: SearchFilteringKey,
    filter: string | number | boolean
  ) => void;
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

  const handleUpdateFilters = (
    key: SearchFilteringKey,
    filter: string | number | boolean
  ) => {
    setSearchFilters((prev) => {
      if (key === 'skillTag') {
        if (typeof filter !== 'string') return prev;
        const updatedSkillTags = Array.isArray(prev.skillTag)
          ? prev.skillTag.includes(filter as string)
            ? prev.skillTag.filter((tag) => tag !== filter)
            : [...prev.skillTag, filter]
          : [filter];
        return { ...prev, skillTag: updatedSkillTags };
      }
      return { ...prev, [key]: filter };
    });
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
