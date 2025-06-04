import { useState } from 'react';
import SearchBar from '../../../../components/common/admin/searchBar/SearchBar';

export default function AdminFAQList() {
  const [value, setValue] = useState<string>('');

  const handleGetKeyword = (keyword: string) => {
    setValue(keyword);
  };

  return (
    <>
      <SearchBar onGetKeyword={handleGetKeyword} value={value} />
    </>
  );
}
