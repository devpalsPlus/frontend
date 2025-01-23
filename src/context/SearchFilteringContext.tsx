import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import type { SearchFilters } from '../models/searchFilters';

type SearchFilteringKey =
  | 'skillTag'
  | 'positionTag'
  | 'methodId'
  | 'isBeginner'
  | 'keyword'
  | 'page';

interface SearchFilteringContextType {
  searchFilters: SearchFilters;
  handleUpdateFilters: (
    key: SearchFilteringKey,
    filter: string | number | boolean | number[]
  ) => void;
}

const SearchFilteringContext = createContext<SearchFilteringContextType | null>(
  null
);

export function SearchFilteringProvider({ children }: PropsWithChildren) {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    skillTag: [],
    positionTag: 0,
    methodId: 0,
    isBeginner: false,
    keyword: '',
    page: 1,
  });

  const handleUpdateFilters = (
    key: SearchFilteringKey,
    filter: string | number | boolean | number[]
  ) => {
    setSearchFilters((prev) => {
      if (key === 'skillTag') {
        if (Array.isArray(filter) && filter.length === 0) {
          return { ...prev, skillTag: [] };
        }
        if (typeof filter !== 'number') return prev;
        if (Array.isArray(prev.skillTag)) {
          if (prev.skillTag.includes(filter)) {
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
      } else if (key === 'page') {
        if (typeof filter === 'number') {
          return { ...prev, page: filter };
        }
        return prev;
      } else {
        return { ...prev, [key]: filter, page: 1 };
      }
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
