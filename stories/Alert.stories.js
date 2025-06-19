import React from 'react';
import { Alert } from '../src';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: 'This is a default alert message.',
  },
};

export const WithTitle = {
  args: {
    title: 'Alert Title',
    children: 'This alert has a title and description.',
  },
};

export const Variants = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }
  }, [
    React.createElement(Alert, {
      key: 'success',
      variant: 'success',
      title: 'Success!',
      style: { fontSize: '0.875rem' }
    }, 'Your action was completed successfully.'),
    React.createElement(Alert, {
      key: 'info',
      variant: 'info',
      title: 'Information',
      style: { fontSize: '0.875rem' }
    }, 'Here is some important information.'),
    React.createElement(Alert, {
      key: 'warning',
      variant: 'warning',
      title: 'Warning',
      style: { fontSize: '0.875rem' }
    }, 'Please be careful with this action.'),
    React.createElement(Alert, {
      key: 'error',
      variant: 'error',
      title: 'Error',
      style: { fontSize: '0.875rem' }
    }, 'Something went wrong. Please try again.'),
  ]),
};

export const Dismissible = {
  render: () => React.createElement('div', {
    style: { width: '400px' }
  }, 
    React.createElement(Alert, {
      variant: 'success',
      title: 'Dismissible Alert',
      dismissible: true,
      style: { fontSize: '0.875rem' }
    }, 'You can close this alert by clicking the X button.')
  ),
}; 