import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ErrorFallback from './ErrorFallback';
import { useLocation } from 'react-router-dom';

export default function QueryErrorBoundary({ children }: PropsWithChildren) {
  const { reset } = useQueryErrorResetBoundary();
  const location = useLocation();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={(props) => {
        const { error } = props;
        return <ErrorFallback error={error} />;
      }}
      key={location.pathname}
    >
      {children}
    </ErrorBoundary>
  );
}
