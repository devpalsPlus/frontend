import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ErrorFallback from './ErrorFallback';

export default function QueryErrorBoundary({ children }: PropsWithChildren) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={(props) => {
        const { error } = props;
        return <ErrorFallback error={error} />;
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
