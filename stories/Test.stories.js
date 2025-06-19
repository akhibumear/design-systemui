import React from 'react';

export default {
  title: 'Test/Basic',
};

export const BasicTest = () => React.createElement('div', {
  style: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  }
}, [
  React.createElement('h1', {
    key: 'title',
    style: { color: '#333', margin: '0 0 10px 0' }
  }, '✅ Storybook Works!'),
  React.createElement('p', {
    key: 'text',
    style: { color: '#666', margin: 0 }
  }, 'This is a basic test story.')
]); 