import { createContext } from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */

export type ErrorBoundaryContextType = {
  hasError: boolean;
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
};

export const ErrorBoundaryContext =
  createContext<ErrorBoundaryContextType | null>(null);
