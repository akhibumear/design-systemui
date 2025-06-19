import React, { useState } from 'react'
import Checkbox from '../src/components/Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return React.createElement(Checkbox, {
      checked: checked,
      onChange: setChecked
    })
  }
}

export const WithLabel = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return React.createElement(Checkbox, {
      label: 'Accept terms and conditions',
      checked: checked,
      onChange: setChecked
    })
  }
}

export const WithDescription = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return React.createElement(Checkbox, {
      label: 'Email notifications',
      description: 'Receive email updates about your account activity',
      checked: checked,
      onChange: setChecked
    })
  }
}

export const WithError = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return React.createElement(Checkbox, {
      label: 'Required checkbox',
      description: 'This checkbox must be checked',
      error: 'You must accept the terms',
      checked: checked,
      onChange: setChecked
    })
  }
}

export const Disabled = {
  render: () => React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
    React.createElement(Checkbox, {
      label: 'Disabled unchecked',
      disabled: true,
      checked: false
    }),
    React.createElement(Checkbox, {
      label: 'Disabled checked',
      disabled: true,
      checked: true
    })
  )
}

export const Sizes = {
  render: () => {
    const [values, setValues] = useState({ sm: false, md: false, lg: false })
    return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
      React.createElement(Checkbox, {
        label: 'Small checkbox',
        size: 'sm',
        checked: values.sm,
        onChange: (checked) => setValues(prev => ({ ...prev, sm: checked }))
      }),
      React.createElement(Checkbox, {
        label: 'Medium checkbox (default)',
        size: 'md',
        checked: values.md,
        onChange: (checked) => setValues(prev => ({ ...prev, md: checked }))
      }),
      React.createElement(Checkbox, {
        label: 'Large checkbox',
        size: 'lg',
        checked: values.lg,
        onChange: (checked) => setValues(prev => ({ ...prev, lg: checked }))
      })
    )
  }
}

export const CheckboxGroup = {
  render: () => {
    const [values, setValues] = useState({
      newsletter: false,
      updates: false,
      marketing: false
    })
    
    return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
      React.createElement('h3', { style: { margin: 0, fontSize: '1rem', fontWeight: '600' } }, 'Email Preferences'),
      React.createElement(Checkbox, {
        label: 'Newsletter',
        description: 'Weekly newsletter with updates and tips',
        checked: values.newsletter,
        onChange: (checked) => setValues(prev => ({ ...prev, newsletter: checked }))
      }),
      React.createElement(Checkbox, {
        label: 'Product Updates',
        description: 'Notifications about new features and improvements',
        checked: values.updates,
        onChange: (checked) => setValues(prev => ({ ...prev, updates: checked }))
      }),
      React.createElement(Checkbox, {
        label: 'Marketing',
        description: 'Promotional offers and marketing communications',
        checked: values.marketing,
        onChange: (checked) => setValues(prev => ({ ...prev, marketing: checked }))
      })
    )
  }
} 