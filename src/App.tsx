import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/global';
import { defaultTheme } from './style/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchFilteringProvider } from './context/SearchFilteringContext';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      //retry: 0,
      gcTime: 20000,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchFilteringProvider>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </SearchFilteringProvider>
    </ThemeProvider>
  );
}

export default App;
