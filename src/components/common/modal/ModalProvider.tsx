import { PropsWithChildren } from 'react';
import {
  ModalContext,
  type ModalContextProps,
} from '../../../context/ModalContext';

export const ModalProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: ModalContextProps }>) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
