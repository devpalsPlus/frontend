import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { SearchType } from '../../models/search';

const useSearchBar = () => {
  const [searchUnit, setSearchUnit] = useState<SearchType>({
    keyword: '',
    page: 1,
  });
  const [value, setValue] = useState<string>('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchKeyword = searchParams.get('keyword');

    if (searchKeyword) {
      setSearchUnit((prev) => ({ ...prev, keyword: searchKeyword }));
      setValue((prev) => (searchKeyword ? searchKeyword : prev));
    }
  }, [searchParams]);

  const handleGetKeyword = (keyword: string) => {
    setSearchUnit((prev) => ({ ...prev, keyword, page: 1 }));
    setValue(keyword);
  };

  const handleChangePagination = (page: number) => {
    setSearchUnit((prev) => ({ ...prev, page }));
  };

  return { searchUnit, value, handleGetKeyword, handleChangePagination };
};

export default useSearchBar;
