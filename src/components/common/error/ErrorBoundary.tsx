import { Component, createElement, ReactNode } from 'react';
import { ErrorBoundaryContext } from '../../../context/ErrorBoundaryContext';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: React.ElementType;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

const initialState = {
  hasError: false,
  error: null,
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('error', error, errorInfo);
  }

  resetErrorBoundary() {
    const { onReset } = this.props;
    onReset?.();
    this.setState(initialState);
  }

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;
    let childrenToRender: ReactNode = children;

    if (hasError) {
      const FallbackComponent = fallback;
      childrenToRender = <FallbackComponent error={error} />;
    }

    return createElement(
      ErrorBoundaryContext.Provider,
      {
        value: { hasError, error, resetErrorBoundary: this.resetErrorBoundary },
      },
      childrenToRender
    );
  }
}
export default ErrorBoundary;
