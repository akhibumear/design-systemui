import React, { useState } from 'react';
import { Navbar } from '../src';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => React.createElement(Navbar, {}, [
    React.createElement(Navbar.Brand, { key: 'brand' }, 'Brand'),
    React.createElement(Navbar.Content, { key: 'content', justify: 'end' }, [
      React.createElement(Navbar.Item, { key: 'home', active: true }, 'Home'),
      React.createElement(Navbar.Item, { key: 'about' }, 'About'),
      React.createElement(Navbar.Item, { key: 'contact' }, 'Contact')
    ])
  ]),
};

export const Variants = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem' }
  }, [
    React.createElement('div', { key: 'default' }, [
      React.createElement('h3', { key: 'title', style: { margin: '0 0 0.5rem 1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Default'),
      React.createElement(Navbar, { key: 'navbar', variant: 'default' }, [
        React.createElement(Navbar.Brand, { key: 'brand' }, 'Brand'),
        React.createElement(Navbar.Content, { key: 'content', justify: 'end' }, [
          React.createElement(Navbar.Item, { key: 'home', active: true }, 'Home'),
          React.createElement(Navbar.Item, { key: 'about' }, 'About')
        ])
      ])
    ]),
    React.createElement('div', { key: 'primary' }, [
      React.createElement('h3', { key: 'title', style: { margin: '0 0 0.5rem 1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Primary'),
      React.createElement(Navbar, { key: 'navbar', variant: 'primary' }, [
        React.createElement(Navbar.Brand, { key: 'brand' }, 'Brand'),
        React.createElement(Navbar.Content, { key: 'content', justify: 'end' }, [
          React.createElement(Navbar.Item, { key: 'home', active: true }, 'Home'),
          React.createElement(Navbar.Item, { key: 'about' }, 'About')
        ])
      ])
    ]),
    React.createElement('div', { key: 'secondary' }, [
      React.createElement('h3', { key: 'title', style: { margin: '0 0 0.5rem 1rem', fontSize: '0.875rem', fontWeight: '600' } }, 'Secondary'),
      React.createElement(Navbar, { key: 'navbar', variant: 'secondary' }, [
        React.createElement(Navbar.Brand, { key: 'brand' }, 'Brand'),
        React.createElement(Navbar.Content, { key: 'content', justify: 'end' }, [
          React.createElement(Navbar.Item, { key: 'home', active: true }, 'Home'),
          React.createElement(Navbar.Item, { key: 'about' }, 'About')
        ])
      ])
    ])
  ]),
};

export const WithLogo = {
  render: () => React.createElement(Navbar, { shadow: true }, [
    React.createElement(Navbar.Brand, { key: 'brand' }, [
      React.createElement('div', { 
        key: 'logo',
        style: { 
          width: '32px', 
          height: '32px', 
          backgroundColor: '#3b82f6', 
          borderRadius: '0.375rem',
          marginRight: '0.5rem'
        }
      }),
      React.createElement('span', { key: 'text' }, 'Company')
    ]),
    React.createElement(Navbar.Content, { key: 'nav', justify: 'center' }, [
      React.createElement(Navbar.Item, { key: 'products' }, 'Products'),
      React.createElement(Navbar.Item, { key: 'solutions' }, 'Solutions'),
      React.createElement(Navbar.Item, { key: 'pricing', active: true }, 'Pricing'),
      React.createElement(Navbar.Item, { key: 'docs' }, 'Documentation')
    ]),
    React.createElement(Navbar.Content, { key: 'actions', justify: 'end' }, [
      React.createElement('button', { 
        key: 'signin',
        style: { 
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#6b7280',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }
      }, 'Sign in'),
      React.createElement('button', { 
        key: 'signup',
        style: { 
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'white',
          backgroundColor: '#3b82f6',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }
      }, 'Sign up')
    ])
  ]),
};

export const ResponsiveNavbar = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return React.createElement('div', {}, [
      React.createElement(Navbar, { key: 'navbar' }, [
        React.createElement(Navbar.Brand, { key: 'brand' }, 'Responsive Brand'),
        React.createElement('div', { 
          key: 'desktop',
          style: { display: 'none' },
          className: 'hidden md:flex'
        }, [
          React.createElement(Navbar.Content, { key: 'content', justify: 'end' }, [
            React.createElement(Navbar.Item, { key: 'home', active: true }, 'Home'),
            React.createElement(Navbar.Item, { key: 'about' }, 'About'),
            React.createElement(Navbar.Item, { key: 'services' }, 'Services'),
            React.createElement(Navbar.Item, { key: 'contact' }, 'Contact')
          ])
        ]),
        React.createElement('div', { 
          key: 'mobile',
          className: 'md:hidden'
        }, [
          React.createElement(Navbar.Toggle, { 
            key: 'toggle',
            isOpen: isOpen,
            onClick: () => setIsOpen(!isOpen)
          })
        ])
      ]),
      React.createElement(Navbar.Menu, { key: 'menu', isOpen: isOpen }, [
        React.createElement(Navbar.Item, { key: 'home', active: true }, 'Home'),
        React.createElement(Navbar.Item, { key: 'about' }, 'About'),
        React.createElement(Navbar.Item, { key: 'services' }, 'Services'),
        React.createElement(Navbar.Item, { key: 'contact' }, 'Contact')
      ])
    ]);
  },
}; 