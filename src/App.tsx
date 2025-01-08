import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/global';
import { defaultTheme } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
