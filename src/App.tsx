import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/global';
import { defaultTheme } from './style/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
