import React from 'react';
import { ThemeProvider } from '../src/hooks/useTheme.jsx';
import '../src/tailwind.css';

/** @type { import('@storybook/react-vite').Preview } */
export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      
      return React.createElement(ThemeProvider, {
        defaultTheme: theme
      }, React.createElement('div', {
        className: theme,
        style: {
          padding: '1rem',
          fontFamily: 'Inter, sans-serif',
          minHeight: '100vh',
          backgroundColor: theme === 'dark' ? 'var(--color-secondary-900)' : 'white',
          color: theme === 'dark' ? 'var(--color-secondary-50)' : 'var(--color-secondary-900)'
        }
      }, React.createElement(Story)));
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' }
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
}