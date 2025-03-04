import { createContext } from 'react';

export interface ModalContextProps {
  isOpen: boolean;
  onClose: (event?: React.SyntheticEvent) => void;
}

const defaultContext: Partial<ModalContextProps> = {
  isOpen: false,
  onClose: () => {},
};

export const ModalContext =
  createContext<Partial<ModalContextProps>>(defaultContext);
