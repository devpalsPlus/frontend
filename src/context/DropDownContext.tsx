import { createContext } from 'react';

export const DropDownContext = createContext<{ close: () => void }>({
  close: () => {},
});
