import React from 'react';
import { Skeleton } from '../src';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    className: 'w-32 h-4',
  },
};

export const Variants = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }
  }, [
    React.createElement('div', { key: 'text', style: { fontSize: '0.875rem' } }, [
      React.createElement('p', { key: 'label' }, 'Text Skeleton'),
      React.createElement(Skeleton, { 
        key: 'skeleton',
        variant: 'text',
        className: 'w-full h-4 mb-2'
      }),
      React.createElement(Skeleton, { 
        key: 'skeleton2',
        variant: 'text',
        className: 'w-3/4 h-4'
      })
    ]),
    React.createElement('div', { key: 'button', style: { fontSize: '0.875rem' } }, [
      React.createElement('p', { key: 'label' }, 'Button Skeleton'),
      React.createElement(Skeleton, { 
        key: 'skeleton',
        variant: 'button',
        className: 'w-24'
      })
    ]),
    React.createElement('div', { key: 'avatar', style: { fontSize: '0.875rem' } }, [
      React.createElement('p', { key: 'label' }, 'Avatar Skeleton'),
      React.createElement(Skeleton, { 
        key: 'skeleton',
        variant: 'avatar'
      })
    ]),
    React.createElement('div', { key: 'card', style: { fontSize: '0.875rem' } }, [
      React.createElement('p', { key: 'label' }, 'Card Skeleton'),
      React.createElement(Skeleton, { 
        key: 'skeleton',
        variant: 'card',
        className: 'w-full h-32'
      })
    ])
  ]),
};

export const Animations = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }
  }, [
    React.createElement('div', { key: 'pulse', style: { fontSize: '0.875rem' } }, [
      React.createElement('p', { key: 'label' }, 'Pulse Animation (Default)'),
      React.createElement(Skeleton, { 
        key: 'skeleton',
        animation: 'pulse',
        className: 'w-full h-4'
      })
    ]),
    React.createElement('div', { key: 'wave', style: { fontSize: '0.875rem' } }, [
      React.createElement('p', { key: 'label' }, 'Wave Animation'),
      React.createElement(Skeleton, { 
        key: 'skeleton',
        animation: 'wave',
        className: 'w-full h-4'
      })
    ]),
    React.createElement('div', { key: 'none', style: { fontSize: '0.875rem' } }, [
      React.createElement('p', { key: 'label' }, 'No Animation'),
      React.createElement(Skeleton, { 
        key: 'skeleton',
        animation: 'none',
        className: 'w-full h-4'
      })
    ])
  ]),
};

export const ComplexLayout = {
  render: () => React.createElement('div', {
    style: { width: '400px', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }
  }, [
    React.createElement('div', { key: 'header', style: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' } }, [
      React.createElement(Skeleton, { 
        key: 'avatar',
        variant: 'avatar',
        className: 'w-12 h-12'
      }),
      React.createElement('div', { key: 'content', style: { flex: 1 } }, [
        React.createElement(Skeleton, { 
          key: 'title',
          className: 'w-32 h-4 mb-2'
        }),
        React.createElement(Skeleton, { 
          key: 'subtitle',
          className: 'w-24 h-3'
        })
      ])
    ]),
    React.createElement(Skeleton, { 
      key: 'main',
      className: 'w-full h-32 mb-4'
    }),
    React.createElement('div', { key: 'text', style: { marginBottom: '1rem' } }, [
      React.createElement(Skeleton, { 
        key: 'line1',
        className: 'w-full h-4 mb-2'
      }),
      React.createElement(Skeleton, { 
        key: 'line2',
        className: 'w-full h-4 mb-2'
      }),
      React.createElement(Skeleton, { 
        key: 'line3',
        className: 'w-3/4 h-4'
      })
    ]),
    React.createElement('div', { key: 'footer', style: { display: 'flex', gap: '0.5rem' } }, [
      React.createElement(Skeleton, { 
        key: 'btn1',
        variant: 'button',
        className: 'w-20'
      }),
      React.createElement(Skeleton, { 
        key: 'btn2',
        variant: 'button',
        className: 'w-16'
      })
    ])
  ]),
}; 