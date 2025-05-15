import { useContext } from 'react';
import SearchFilteringContext from '../context/SearchFilteringContext';

export const useSaveSearchFiltering = () => {
  const context = useContext(SearchFilteringContext);
  if (!context) {
    throw new Error('filtering context');
  }
  return context;
};
