import React, { useState } from 'react'
import Radio, { RadioGroup } from '../src/components/Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => {
    const [value, setValue] = useState('')
    return React.createElement(Radio, {
      label: 'Option 1',
      value: 'option1',
      checked: value === 'option1',
      onChange: () => setValue('option1')
    })
  }
}

export const WithDescription = {
  render: () => {
    const [value, setValue] = useState('')
    return React.createElement(Radio, {
      label: 'Premium Plan',
      description: 'Access to all features with priority support',
      value: 'premium',
      checked: value === 'premium',
      onChange: () => setValue('premium')
    })
  }
}

export const RadioGroupExample = {
  render: () => {
    const [value, setValue] = useState('medium')
    return React.createElement(RadioGroup, {
      value: value,
      onChange: setValue,
      name: 'size'
    },
      React.createElement(Radio, {
        label: 'Small',
        description: 'Perfect for personal use',
        value: 'small'
      }),
      React.createElement(Radio, {
        label: 'Medium',
        description: 'Great for small teams',
        value: 'medium'
      }),
      React.createElement(Radio, {
        label: 'Large',
        description: 'Best for large organizations',
        value: 'large'
      })
    )
  }
}

export const Sizes = {
  render: () => {
    const [value, setValue] = useState('md')
    return React.createElement(RadioGroup, {
      value: value,
      onChange: setValue,
      name: 'sizes'
    },
      React.createElement(Radio, {
        label: 'Small radio',
        size: 'sm',
        value: 'sm'
      }),
      React.createElement(Radio, {
        label: 'Medium radio (default)',
        size: 'md',
        value: 'md'
      }),
      React.createElement(Radio, {
        label: 'Large radio',
        size: 'lg',
        value: 'lg'
      })
    )
  }
}

export const Disabled = {
  render: () => React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem' } },
    React.createElement(Radio, {
      label: 'Disabled unchecked',
      disabled: true,
      checked: false
    }),
    React.createElement(Radio, {
      label: 'Disabled checked',
      disabled: true,
      checked: true
    })
  )
}

export const WithError = {
  render: () => {
    const [value, setValue] = useState('')
    return React.createElement(RadioGroup, {
      value: value,
      onChange: setValue,
      name: 'required'
    },
      React.createElement(Radio, {
        label: 'Option 1',
        value: 'option1',
        error: value === '' ? 'Please select an option' : ''
      }),
      React.createElement(Radio, {
        label: 'Option 2',
        value: 'option2'
      })
    )
  }
}

export const PaymentMethod = {
  render: () => {
    const [method, setMethod] = useState('card')
    return React.createElement('div', { style: { width: '300px' } },
      React.createElement('h3', { style: { margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' } }, 'Payment Method'),
      React.createElement(RadioGroup, {
        value: method,
        onChange: setMethod,
        name: 'payment'
      },
        React.createElement(Radio, {
          label: 'Credit Card',
          description: 'Pay with Visa, Mastercard, or American Express',
          value: 'card'
        }),
        React.createElement(Radio, {
          label: 'PayPal',
          description: 'Pay securely with your PayPal account',
          value: 'paypal'
        }),
        React.createElement(Radio, {
          label: 'Bank Transfer',
          description: 'Direct transfer from your bank account',
          value: 'bank'
        }),
        React.createElement(Radio, {
          label: 'Cryptocurrency',
          description: 'Pay with Bitcoin, Ethereum, or other crypto',
          value: 'crypto'
        })
      )
    )
  }
} 