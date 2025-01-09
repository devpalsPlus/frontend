import { useContext } from 'react';
import SearchFilteringContext from '../context/SearchFilteringContext';

export const useSearchFiltering = () => {
  const context = useContext(SearchFilteringContext);
  if (!context) {
    throw new Error('filtering context');
  }
  return context;
};
