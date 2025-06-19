import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from '../src';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => React.createElement(Card, {
    style: { width: '300px' }
  }, [
    React.createElement(CardHeader, { key: 'header' }, [
      React.createElement(CardTitle, { key: 'title' }, 'Card Title'),
      React.createElement(CardDescription, { key: 'desc' }, 'This is a card description that explains what this card is about.'),
    ]),
    React.createElement(CardContent, { key: 'content' }, 
      React.createElement('p', {
        style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
      }, 'This is the main content area of the card. You can put any content here.')
    ),
    React.createElement(CardFooter, { key: 'footer' }, [
      React.createElement(Button, { key: 'btn1', size: 'sm' }, 'Action'),
      React.createElement(Button, { key: 'btn2', variant: 'outline', size: 'sm' }, 'Cancel'),
    ]),
  ]),
};

export const Hoverable = {
  render: () => React.createElement(Card, {
    hoverable: true,
    style: { width: '300px' }
  }, [
    React.createElement(CardHeader, { key: 'header' }, [
      React.createElement(CardTitle, { key: 'title' }, 'Hoverable Card'),
      React.createElement(CardDescription, { key: 'desc' }, 'Hover over this card to see the shadow effect.'),
    ]),
    React.createElement(CardContent, { key: 'content' }, 
      React.createElement('p', {
        style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
      }, 'This card will show an enhanced shadow when you hover over it.')
    ),
  ]),
};

export const WithBadge = {
  render: () => React.createElement(Card, {
    style: { width: '300px' }
  }, [
    React.createElement(CardHeader, { key: 'header' }, [
      React.createElement('div', {
        key: 'title-row',
        style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
      }, [
        React.createElement(CardTitle, { key: 'title' }, 'Project Status'),
        React.createElement(Badge, { key: 'badge', variant: 'success', size: 'sm' }, 'Active'),
      ]),
      React.createElement(CardDescription, { key: 'desc' }, 'Current project status and information.'),
    ]),
    React.createElement(CardContent, { key: 'content' }, 
      React.createElement('p', {
        style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
      }, 'This project is currently active and running smoothly.')
    ),
  ]),
};

export const Variants = {
  render: () => React.createElement('div', {
    style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', width: '600px' }
  }, [
    React.createElement(Card, { 
      key: 'default',
      hoverable: true,
      style: { minHeight: '150px' }
    }, [
      React.createElement(CardHeader, { key: 'header' }, [
        React.createElement(CardTitle, { key: 'title' }, 'Default Card'),
        React.createElement(CardDescription, { key: 'desc' }, 'Standard card with shadow and hover effect'),
      ]),
      React.createElement(CardContent, { key: 'content' }, 
        React.createElement('p', {
          style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
        }, 'Hover to see the shadow effect.')
      ),
    ]),
    React.createElement(Card, {
      key: 'outline',
      variant: 'outline',
      hoverable: true,
      style: { minHeight: '150px' }
    }, [
      React.createElement(CardHeader, { key: 'header' }, [
        React.createElement(CardTitle, { key: 'title' }, 'Outline Card'),
        React.createElement(CardDescription, { key: 'desc' }, 'Card with border only'),
      ]),
      React.createElement(CardContent, { key: 'content' }, 
        React.createElement('p', {
          style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
        }, 'This card uses the outline variant.')
      ),
    ]),
    React.createElement(Card, {
      key: 'filled',
      variant: 'filled',
      hoverable: true,
      style: { minHeight: '150px' }
    }, [
      React.createElement(CardHeader, { key: 'header' }, [
        React.createElement(CardTitle, { key: 'title' }, 'Filled Card'),
        React.createElement(CardDescription, { key: 'desc' }, 'Card with filled background'),
      ]),
      React.createElement(CardContent, { key: 'content' }, 
        React.createElement('p', {
          style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
        }, 'This card has a filled background.')
      ),
    ]),
    React.createElement(Card, {
      key: 'elevated',
      variant: 'elevated',
      style: { minHeight: '150px' }
    }, [
      React.createElement(CardHeader, { key: 'header' }, [
        React.createElement(CardTitle, { key: 'title' }, 'Elevated Card'),
        React.createElement(CardDescription, { key: 'desc' }, 'Card with enhanced shadow'),
      ]),
      React.createElement(CardContent, { key: 'content' }, 
        React.createElement('p', {
          style: { fontSize: '0.875rem', color: 'var(--color-secondary-600)' }
        }, 'This card has a permanent elevated shadow.')
      ),
    ]),
  ]),
}; 