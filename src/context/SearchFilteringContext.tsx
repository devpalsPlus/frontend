import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import type { SearchFilters } from '../models/searchFilters';

type SearchFilteringKey =
  | 'skillTag'
  | 'positionTag'
  | 'method'
  | 'isBeginner'
  | 'keyword'
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
    positionTag: 0,
    method: 0,
    isBeginner: false,
    keyword: '',
    page: 1,
  });

  const handleUpdateFilters = (
    key: SearchFilteringKey,
    filter: string | number | boolean
  ) => {
    setSearchFilters((prev) => {
      if (key === 'skillTag') {
        if (typeof filter !== 'string') return prev;

        if (Array.isArray(prev.skillTag)) {
          if (prev.skillTag.includes(filter as string)) {
            const updatedSkillTags = prev.skillTag.filter(
              (tag) => tag !== filter
            );
            return { ...prev, skillTag: updatedSkillTags };
          } else {
            const updatedSkillTags = [...prev.skillTag, filter];
            return { ...prev, skillTag: updatedSkillTags };
          }
        } else {
          const updatedSkillTags = [filter];
          return { ...prev, skillTag: updatedSkillTags };
        }
      }
      return { ...prev, [key]: filter };
    });
  };

  useEffect(() => {
    console.log('searchFilters', searchFilters);
  }, [searchFilters]);

  return (
    <SearchFilteringContext.Provider
      value={{ searchFilters, handleUpdateFilters }}
    >
      {children}
    </SearchFilteringContext.Provider>
  );
}

export default SearchFilteringContext;
