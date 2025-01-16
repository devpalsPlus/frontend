import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

const Render = async (component: ReactNode, options: any = {}) => {
  const { routerProps } = options;
  const user = userEvent.setup();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return {
    user,
    ...render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter {...routerProps}>{component}</MemoryRouter>
      </QueryClientProvider>
    ),
  };
};
export default Render;
