import { GlobalStyle } from '../src/styles/global'
import { defaultTheme } from '../src/styles/themes/default'
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#f2f2f2',
        },
        {
          name: 'dark',
          value: '#0d0d0d',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: GlobalStyle,
      Provider: ThemeProvider,
      themes: {
        defaultTheme
      }
    })
  ]
};

export default preview;
