import React from 'react';
import { Badge } from '../src';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: 'Default',
  },
};

export const Variants = {
  render: () => React.createElement('div', {
    style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }
  }, [
    React.createElement(Badge, { key: 'default', size: 'sm' }, 'Default'),
    React.createElement(Badge, { key: 'primary', variant: 'primary', size: 'sm' }, 'Primary'),
    React.createElement(Badge, { key: 'success', variant: 'success', size: 'sm' }, 'Success'),
    React.createElement(Badge, { key: 'warning', variant: 'warning', size: 'sm' }, 'Warning'),
    React.createElement(Badge, { key: 'error', variant: 'error', size: 'sm' }, 'Error'),
    React.createElement(Badge, { key: 'outline', variant: 'outline', size: 'sm' }, 'Outline'),
  ]),
};

export const Sizes = {
  render: () => React.createElement('div', {
    style: { display: 'flex', gap: '0.5rem', alignItems: 'center' }
  }, [
    React.createElement(Badge, { key: 'sm', size: 'sm' }, 'Small'),
    React.createElement(Badge, { key: 'md', size: 'md' }, 'Medium'),
    React.createElement(Badge, { key: 'lg', size: 'lg' }, 'Large'),
  ]),
};

export const WithIcons = {
  render: () => React.createElement('div', {
    style: { display: 'flex', gap: '1.5rem' }
  }, [
    React.createElement('div', {
      key: 'notification',
      style: { position: 'relative' }
    }, [
      React.createElement('button', {
        key: 'btn',
        style: {
          padding: '0.5rem',
          color: 'var(--color-secondary-600)',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }
      }, React.createElement('svg', {
        style: { width: '24px', height: '24px' },
        fill: 'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24'
      }, React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M15 17h5l-5 5 5-5m-5 5V7a3 3 0 00-3-3H9a3 3 0 00-3 3v10'
      }))),
      React.createElement(Badge, {
        key: 'badge',
        size: 'sm',
        variant: 'error',
        style: { position: 'absolute', top: '-4px', right: '-4px' }
      }, '3'),
    ]),
    React.createElement('div', {
      key: 'inbox',
      style: { position: 'relative' }
    }, [
      React.createElement('button', {
        key: 'btn',
        style: {
          padding: '0.5rem',
          color: 'var(--color-secondary-600)',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }
      }, React.createElement('svg', {
        style: { width: '24px', height: '24px' },
        fill: 'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24'
      }, React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
      }))),
      React.createElement(Badge, {
        key: 'badge',
        size: 'sm',
        variant: 'primary',
        style: { position: 'absolute', top: '-4px', right: '-4px' }
      }, '12'),
    ]),
  ]),
}; 