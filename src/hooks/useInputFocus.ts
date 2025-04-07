import { useState } from 'react';

const useInputFocus = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClick = () => {
    setIsFocused(false);
  };

  return { isFocused, handleFocus, handleClick };
};

export default useInputFocus;
