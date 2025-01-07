import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './style/theme';
import { GlobalStyle } from './style/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
