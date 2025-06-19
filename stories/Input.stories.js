import React from 'react';
import { Input } from '../src';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    label: 'Default Input',
    placeholder: 'Enter text...',
  },
};

export const WithHelperText = {
  args: {
    label: 'Email Address',
    placeholder: 'your@email.com',
    helperText: "We'll never share your email.",
  },
};

export const Required = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const WithError = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password is required',
  },
};

export const Sizes = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }
  }, [
    React.createElement(Input, {
      key: 'sm',
      label: 'Small Input',
      size: 'sm',
      placeholder: 'Small size'
    }),
    React.createElement(Input, {
      key: 'md',
      label: 'Medium Input',
      size: 'md',
      placeholder: 'Medium size'
    }),
    React.createElement(Input, {
      key: 'lg',
      label: 'Large Input',
      size: 'lg',
      placeholder: 'Large size'
    }),
  ]),
};

export const WithIcons = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }
  }, [
    React.createElement(Input, {
      key: 'search',
      label: 'Search',
      placeholder: 'Search...',
      leftIcon: React.createElement('svg', {
        style: { width: '14px', height: '14px' },
        fill: 'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24'
      }, React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      }))
    }),
    React.createElement(Input, {
      key: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'your@email.com',
      leftIcon: React.createElement('svg', {
        style: { width: '14px', height: '14px' },
        fill: 'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24'
      }, React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
      }))
    }),
  ]),
}; 