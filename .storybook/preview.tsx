import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/style/theme';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={defaultTheme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
