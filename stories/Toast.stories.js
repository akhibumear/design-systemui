import React from 'react';
import { Toast } from '../src';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: 'This is a default toast message.',
  },
};

export const WithTitle = {
  args: {
    title: 'Toast Title',
    children: 'This toast has a title and description.',
  },
};

export const Variants = {
  render: () => React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }
  }, [
    React.createElement(Toast, {
      key: 'success',
      variant: 'success',
      title: 'Success!',
      closable: false,
      style: { fontSize: '0.875rem' }
    }, 'Your action was completed successfully.'),
    React.createElement(Toast, {
      key: 'info',
      variant: 'info',
      title: 'Information',
      closable: false,
      style: { fontSize: '0.875rem' }
    }, 'Here is some important information.'),
    React.createElement(Toast, {
      key: 'warning',
      variant: 'warning',
      title: 'Warning',
      closable: false,
      style: { fontSize: '0.875rem' }
    }, 'Please be careful with this action.'),
    React.createElement(Toast, {
      key: 'error',
      variant: 'error',
      title: 'Error',
      closable: false,
      style: { fontSize: '0.875rem' }
    }, 'Something went wrong. Please try again.'),
  ]),
};

export const AutoDismiss = {
  render: () => React.createElement('div', {
    style: { width: '400px' }
  }, 
    React.createElement(Toast, {
      variant: 'success',
      title: 'Auto-dismiss Toast',
      duration: 3000,
      style: { fontSize: '0.875rem' }
    }, 'This toast will disappear after 3 seconds.')
  ),
};

export const Persistent = {
  render: () => React.createElement('div', {
    style: { width: '400px' }
  }, 
    React.createElement(Toast, {
      variant: 'info',
      title: 'Persistent Toast',
      duration: 0,
      style: { fontSize: '0.875rem' }
    }, 'This toast will not auto-dismiss. Click the X to close.')
  ),
}; 