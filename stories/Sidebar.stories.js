import React from 'react';
import { Sidebar } from '../src';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

const HomeIcon = () => React.createElement('svg', {
  className: 'w-5 h-5',
  fill: 'currentColor',
  viewBox: '0 0 20 20'
}, React.createElement('path', {
  d: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'
}));

const UserIcon = () => React.createElement('svg', {
  className: 'w-5 h-5',
  fill: 'currentColor',
  viewBox: '0 0 20 20'
}, React.createElement('path', {
  fillRule: 'evenodd',
  d: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
  clipRule: 'evenodd'
}));

const SettingsIcon = () => React.createElement('svg', {
  className: 'w-5 h-5',
  fill: 'currentColor',
  viewBox: '0 0 20 20'
}, React.createElement('path', {
  fillRule: 'evenodd',
  d: 'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z',
  clipRule: 'evenodd'
}));

export const Default = {
  render: () => React.createElement('div', {
    style: { height: '500px', display: 'flex' }
  }, [
    React.createElement(Sidebar, { key: 'sidebar' }, [
      React.createElement(Sidebar.Header, { key: 'header' }, [
        React.createElement('h2', { key: 'title', style: { fontSize: '1.125rem', fontWeight: '600' } }, 'Dashboard')
      ]),
      React.createElement(Sidebar.Content, { key: 'content' }, [
        React.createElement(Sidebar.Group, { key: 'main', title: 'Main' }, [
          React.createElement(Sidebar.Item, { key: 'home', icon: React.createElement(HomeIcon), active: true }, 'Home'),
          React.createElement(Sidebar.Item, { key: 'profile', icon: React.createElement(UserIcon) }, 'Profile')
        ]),
        React.createElement(Sidebar.Group, { key: 'admin', title: 'Administration' }, [
          React.createElement(Sidebar.Item, { key: 'settings', icon: React.createElement(SettingsIcon) }, 'Settings')
        ])
      ])
    ]),
    React.createElement('div', {
      key: 'content',
      style: { 
        flex: 1, 
        padding: '2rem',
        backgroundColor: '#f9fafb'
      }
    }, [
      React.createElement('h1', { key: 'title' }, 'Main Content Area'),
      React.createElement('p', { key: 'desc' }, 'This is the main content area next to the sidebar.')
    ])
  ]),
};

export const Collapsible = {
  render: () => React.createElement('div', {
    style: { height: '500px', display: 'flex' }
  }, [
    React.createElement(Sidebar, { 
      key: 'sidebar',
      collapsible: true,
      defaultCollapsed: false
    }, [
      React.createElement(Sidebar.Header, { key: 'header' }, [
        React.createElement('div', { 
          key: 'header-content',
          style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }
        }, [
          React.createElement('h2', { key: 'title', style: { fontSize: '1.125rem', fontWeight: '600' } }, 'Dashboard'),
          React.createElement(Sidebar.Toggle, { key: 'toggle' })
        ])
      ]),
      React.createElement(Sidebar.Content, { key: 'content' }, [
        React.createElement(Sidebar.Group, { key: 'main', title: 'Navigation' }, [
          React.createElement(Sidebar.Item, { key: 'home', icon: React.createElement(HomeIcon), active: true }, 'Dashboard'),
          React.createElement(Sidebar.Item, { key: 'profile', icon: React.createElement(UserIcon) }, 'Profile'),
          React.createElement(Sidebar.Item, { key: 'settings', icon: React.createElement(SettingsIcon) }, 'Settings')
        ])
      ])
    ]),
    React.createElement('div', {
      key: 'content',
      style: { 
        flex: 1, 
        padding: '2rem',
        backgroundColor: '#f9fafb'
      }
    }, [
      React.createElement('h1', { key: 'title' }, 'Collapsible Sidebar'),
      React.createElement('p', { key: 'desc' }, 'Click the toggle button in the sidebar header to collapse/expand.')
    ])
  ]),
};

export const Variants = {
  render: () => React.createElement('div', {
    style: { height: '400px', display: 'flex', gap: '1rem' }
  }, [
    React.createElement('div', { key: 'default', style: { flex: 1 } }, [
      React.createElement('h3', { key: 'title', style: { marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Default'),
      React.createElement('div', { key: 'container', style: { height: '350px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' } }, [
        React.createElement(Sidebar, { key: 'sidebar', variant: 'default' }, [
          React.createElement(Sidebar.Content, { key: 'content' }, [
            React.createElement(Sidebar.Item, { key: 'home', icon: React.createElement(HomeIcon), active: true }, 'Home'),
            React.createElement(Sidebar.Item, { key: 'profile', icon: React.createElement(UserIcon) }, 'Profile')
          ])
        ])
      ])
    ]),
    React.createElement('div', { key: 'primary', style: { flex: 1 } }, [
      React.createElement('h3', { key: 'title', style: { marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Primary'),
      React.createElement('div', { key: 'container', style: { height: '350px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' } }, [
        React.createElement(Sidebar, { key: 'sidebar', variant: 'primary' }, [
          React.createElement(Sidebar.Content, { key: 'content' }, [
            React.createElement(Sidebar.Item, { key: 'home', icon: React.createElement(HomeIcon), active: true }, 'Home'),
            React.createElement(Sidebar.Item, { key: 'profile', icon: React.createElement(UserIcon) }, 'Profile')
          ])
        ])
      ])
    ]),
    React.createElement('div', { key: 'secondary', style: { flex: 1 } }, [
      React.createElement('h3', { key: 'title', style: { marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Secondary'),
      React.createElement('div', { key: 'container', style: { height: '350px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' } }, [
        React.createElement(Sidebar, { key: 'sidebar', variant: 'secondary' }, [
          React.createElement(Sidebar.Content, { key: 'content' }, [
            React.createElement(Sidebar.Item, { key: 'home', icon: React.createElement(HomeIcon), active: true }, 'Home'),
            React.createElement(Sidebar.Item, { key: 'profile', icon: React.createElement(UserIcon) }, 'Profile')
          ])
        ])
      ])
    ])
  ]),
}; 