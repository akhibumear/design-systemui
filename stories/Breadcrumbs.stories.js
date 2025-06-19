import React from 'react';
import { Breadcrumbs } from '../src';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => React.createElement(Breadcrumbs, {}, [
    React.createElement(Breadcrumbs.Item, { key: 'home', href: '#' }, 'Home'),
    React.createElement(Breadcrumbs.Item, { key: 'category', href: '#' }, 'Category'),
    React.createElement(Breadcrumbs.Item, { key: 'current', active: true }, 'Current Page')
  ]),
};

export const WithCustomSeparator = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }
  }, [
    React.createElement('div', { key: 'arrow' }, [
      React.createElement('p', { key: 'label', style: { fontSize: '0.875rem', marginBottom: '0.5rem' } }, 'Arrow Separator'),
      React.createElement(Breadcrumbs, { key: 'breadcrumbs', separator: '→' }, [
        React.createElement(Breadcrumbs.Item, { key: 'home', href: '#' }, 'Home'),
        React.createElement(Breadcrumbs.Item, { key: 'docs', href: '#' }, 'Documentation'),
        React.createElement(Breadcrumbs.Item, { key: 'current', active: true }, 'Getting Started')
      ])
    ]),
    React.createElement('div', { key: 'gt' }, [
      React.createElement('p', { key: 'label', style: { fontSize: '0.875rem', marginBottom: '0.5rem' } }, 'Greater Than Separator'),
      React.createElement(Breadcrumbs, { key: 'breadcrumbs', separator: '>' }, [
        React.createElement(Breadcrumbs.Item, { key: 'home', href: '#' }, 'Home'),
        React.createElement(Breadcrumbs.Item, { key: 'products', href: '#' }, 'Products'),
        React.createElement(Breadcrumbs.Item, { key: 'current', active: true }, 'Product Details')
      ])
    ]),
    React.createElement('div', { key: 'dot' }, [
      React.createElement('p', { key: 'label', style: { fontSize: '0.875rem', marginBottom: '0.5rem' } }, 'Dot Separator'),
      React.createElement(Breadcrumbs, { key: 'breadcrumbs', separator: '•' }, [
        React.createElement(Breadcrumbs.Item, { key: 'dashboard', href: '#' }, 'Dashboard'),
        React.createElement(Breadcrumbs.Item, { key: 'users', href: '#' }, 'Users'),
        React.createElement(Breadcrumbs.Item, { key: 'current', active: true }, 'User Profile')
      ])
    ])
  ]),
};

export const Variants = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }
  }, [
    React.createElement('div', { key: 'default' }, [
      React.createElement('p', { key: 'label', style: { fontSize: '0.875rem', marginBottom: '0.5rem' } }, 'Default'),
      React.createElement(Breadcrumbs, { key: 'breadcrumbs', variant: 'default' }, [
        React.createElement(Breadcrumbs.Item, { key: 'home', href: '#' }, 'Home'),
        React.createElement(Breadcrumbs.Item, { key: 'category', href: '#' }, 'Category'),
        React.createElement(Breadcrumbs.Item, { key: 'current', active: true }, 'Current Page')
      ])
    ]),
    React.createElement('div', { key: 'primary' }, [
      React.createElement('p', { key: 'label', style: { fontSize: '0.875rem', marginBottom: '0.5rem' } }, 'Primary'),
      React.createElement(Breadcrumbs, { key: 'breadcrumbs', variant: 'primary' }, [
        React.createElement(Breadcrumbs.Item, { key: 'home', href: '#' }, 'Home'),
        React.createElement(Breadcrumbs.Item, { key: 'category', href: '#' }, 'Category'),
        React.createElement(Breadcrumbs.Item, { key: 'current', active: true }, 'Current Page')
      ])
    ]),
    React.createElement('div', { key: 'secondary' }, [
      React.createElement('p', { key: 'label', style: { fontSize: '0.875rem', marginBottom: '0.5rem' } }, 'Secondary'),
      React.createElement(Breadcrumbs, { key: 'breadcrumbs', variant: 'secondary' }, [
        React.createElement(Breadcrumbs.Item, { key: 'home', href: '#' }, 'Home'),
        React.createElement(Breadcrumbs.Item, { key: 'category', href: '#' }, 'Category'),
        React.createElement(Breadcrumbs.Item, { key: 'current', active: true }, 'Current Page')
      ])
    ])
  ]),
};

export const WithIcons = {
  render: () => {
    const HomeIcon = () => React.createElement('svg', {
      className: 'w-4 h-4',
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, React.createElement('path', {
      d: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'
    }));

    const FolderIcon = () => React.createElement('svg', {
      className: 'w-4 h-4',
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, React.createElement('path', {
      d: 'M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
    }));

    return React.createElement(Breadcrumbs, {}, [
      React.createElement(Breadcrumbs.Item, { 
        key: 'home', 
        href: '#' 
      }, [
        React.createElement(HomeIcon, { key: 'icon' }),
        React.createElement('span', { key: 'text', style: { marginLeft: '0.25rem' } }, 'Home')
      ]),
      React.createElement(Breadcrumbs.Item, { 
        key: 'projects', 
        href: '#' 
      }, [
        React.createElement(FolderIcon, { key: 'icon' }),
        React.createElement('span', { key: 'text', style: { marginLeft: '0.25rem' } }, 'Projects')
      ]),
      React.createElement(Breadcrumbs.Item, { 
        key: 'current', 
        active: true 
      }, 'Project Details')
    ]);
  },
};

export const ComplexNavigation = {
  render: () => React.createElement('div', {
    style: { width: '600px' }
  }, [
    React.createElement(Breadcrumbs, { key: 'breadcrumbs' }, [
      React.createElement(Breadcrumbs.Item, { key: 'root', href: '#' }, 'E-commerce Platform'),
      React.createElement(Breadcrumbs.Item, { key: 'admin', href: '#' }, 'Admin Dashboard'),
      React.createElement(Breadcrumbs.Item, { key: 'products', href: '#' }, 'Product Management'),
      React.createElement(Breadcrumbs.Item, { key: 'categories', href: '#' }, 'Categories'),
      React.createElement(Breadcrumbs.Item, { key: 'electronics', href: '#' }, 'Electronics'),
      React.createElement(Breadcrumbs.Item, { key: 'current', active: true }, 'Smartphones')
    ])
  ]),
}; 