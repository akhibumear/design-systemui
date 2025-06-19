import React from 'react';
import { Button } from '../src';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Sizes = {
  render: () => React.createElement('div', {
    style: { display: 'flex', gap: '1rem', alignItems: 'center' }
  }, [
    React.createElement(Button, { key: 'sm', size: 'sm' }, 'Small'),
    React.createElement(Button, { key: 'md', size: 'md' }, 'Medium'),
    React.createElement(Button, { key: 'lg', size: 'lg' }, 'Large'),
  ]),
};

export const WithIcons = {
  render: () => React.createElement('div', {
    style: { display: 'flex', gap: '1rem', flexWrap: 'wrap' }
  }, [
    React.createElement(Button, {
      key: 'left',
      leftIcon: React.createElement('svg', {
        style: { width: '14px', height: '14px' },
        fill: 'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24'
      }, React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M12 4v16m8-8H4'
      }))
    }, 'Add Item'),
    React.createElement(Button, {
      key: 'right',
      variant: 'outline',
      rightIcon: React.createElement('svg', {
        style: { width: '14px', height: '14px' },
        fill: 'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24'
      }, React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M9 5l7 7-7 7'
      }))
    }, 'Continue'),
  ]),
};

export const Loading = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}; 