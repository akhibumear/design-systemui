import React, { useState } from 'react'
import Tabs, { TabsList, TabsTrigger, TabsContent } from '../src/components/Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => React.createElement(Tabs, { defaultValue: 'tab1', style: { width: '400px' } },
    React.createElement(TabsList, {},
      React.createElement(TabsTrigger, { value: 'tab1' }, 'Tab 1'),
      React.createElement(TabsTrigger, { value: 'tab2' }, 'Tab 2'),
      React.createElement(TabsTrigger, { value: 'tab3' }, 'Tab 3')
    ),
    React.createElement(TabsContent, { value: 'tab1' },
      React.createElement('div', { style: { padding: '1rem' } },
        React.createElement('h3', { style: { margin: '0 0 0.5rem 0' } }, 'Content for Tab 1'),
        React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
          'This is the content for the first tab.'
        )
      )
    ),
    React.createElement(TabsContent, { value: 'tab2' },
      React.createElement('div', { style: { padding: '1rem' } },
        React.createElement('h3', { style: { margin: '0 0 0.5rem 0' } }, 'Content for Tab 2'),
        React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
          'This is the content for the second tab.'
        )
      )
    ),
    React.createElement(TabsContent, { value: 'tab3' },
      React.createElement('div', { style: { padding: '1rem' } },
        React.createElement('h3', { style: { margin: '0 0 0.5rem 0' } }, 'Content for Tab 3'),
        React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
          'This is the content for the third tab.'
        )
      )
    )
  )
}

export const Controlled = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview')
    return React.createElement(Tabs, { 
      value: activeTab, 
      onValueChange: setActiveTab,
      style: { width: '500px' }
    },
      React.createElement(TabsList, {},
        React.createElement(TabsTrigger, { value: 'overview' }, 'Overview'),
        React.createElement(TabsTrigger, { value: 'analytics' }, 'Analytics'),
        React.createElement(TabsTrigger, { value: 'settings' }, 'Settings')
      ),
      React.createElement(TabsContent, { value: 'overview' },
        React.createElement('div', { style: { padding: '1.5rem' } },
          React.createElement('h3', { style: { margin: '0 0 1rem 0' } }, 'Dashboard Overview'),
          React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
            'Welcome to your dashboard overview.'
          )
        )
      ),
      React.createElement(TabsContent, { value: 'analytics' },
        React.createElement('div', { style: { padding: '1.5rem' } },
          React.createElement('h3', { style: { margin: '0 0 1rem 0' } }, 'Analytics'),
          React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
            'View your analytics data here.'
          )
        )
      ),
      React.createElement(TabsContent, { value: 'settings' },
        React.createElement('div', { style: { padding: '1.5rem' } },
          React.createElement('h3', { style: { margin: '0 0 1rem 0' } }, 'Settings'),
          React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
            'Manage your account settings.'
          )
        )
      )
    )
  }
}

export const VerticalTabs = {
  render: () => React.createElement(Tabs, { 
    defaultValue: 'profile', 
    orientation: 'vertical',
    style: { width: '600px', height: '300px' }
  },
    React.createElement(TabsList, {},
      React.createElement(TabsTrigger, { value: 'profile' }, 'Profile'),
      React.createElement(TabsTrigger, { value: 'account' }, 'Account'),
      React.createElement(TabsTrigger, { value: 'security' }, 'Security')
    ),
    React.createElement(TabsContent, { value: 'profile' },
      React.createElement('div', { style: { padding: '1rem' } },
        React.createElement('h3', { style: { margin: '0 0 0.5rem 0' } }, 'Profile Settings'),
        React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
          'Update your profile information.'
        )
      )
    ),
    React.createElement(TabsContent, { value: 'account' },
      React.createElement('div', { style: { padding: '1rem' } },
        React.createElement('h3', { style: { margin: '0 0 0.5rem 0' } }, 'Account Settings'),
        React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
          'Manage your account details.'
        )
      )
    ),
    React.createElement(TabsContent, { value: 'security' },
      React.createElement('div', { style: { padding: '1rem' } },
        React.createElement('h3', { style: { margin: '0 0 0.5rem 0' } }, 'Security Settings'),
        React.createElement('p', { style: { margin: 0, color: 'var(--color-secondary-600)' } }, 
          'Configure security options.'
        )
      )
    )
  )
} 