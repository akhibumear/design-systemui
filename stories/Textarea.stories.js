import React from 'react'
import Textarea from '../src/components/Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => React.createElement(Textarea, {
    placeholder: 'Enter your message...'
  })
}

export const WithLabel = {
  render: () => React.createElement(Textarea, {
    label: 'Message',
    placeholder: 'Enter your message...'
  })
}

export const Required = {
  render: () => React.createElement(Textarea, {
    label: 'Required Message',
    placeholder: 'This field is required',
    required: true
  })
}

export const WithHelperText = {
  render: () => React.createElement(Textarea, {
    label: 'Description',
    placeholder: 'Enter description...',
    helperText: 'Provide a detailed description (max 500 characters)'
  })
}

export const WithError = {
  render: () => React.createElement(Textarea, {
    label: 'Message',
    placeholder: 'Enter your message...',
    error: 'This field is required'
  })
}

export const Disabled = {
  render: () => React.createElement(Textarea, {
    label: 'Disabled Textarea',
    placeholder: 'This is disabled',
    disabled: true,
    value: 'This textarea is disabled'
  })
}

export const Sizes = {
  render: () => React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' } },
    React.createElement(Textarea, {
      label: 'Small',
      size: 'sm',
      placeholder: 'Small textarea'
    }),
    React.createElement(Textarea, {
      label: 'Medium (Default)',
      size: 'md',
      placeholder: 'Medium textarea'
    }),
    React.createElement(Textarea, {
      label: 'Large',
      size: 'lg',
      placeholder: 'Large textarea'
    })
  )
}

export const CustomRows = {
  render: () => React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' } },
    React.createElement(Textarea, {
      label: '2 Rows',
      rows: 2,
      placeholder: 'Short textarea'
    }),
    React.createElement(Textarea, {
      label: '6 Rows',
      rows: 6,
      placeholder: 'Tall textarea'
    })
  )
}

export const ResizeOptions = {
  render: () => React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' } },
    React.createElement(Textarea, {
      label: 'Vertical Resize (Default)',
      resize: 'vertical',
      placeholder: 'Can resize vertically'
    }),
    React.createElement(Textarea, {
      label: 'Horizontal Resize',
      resize: 'horizontal',
      placeholder: 'Can resize horizontally'
    }),
    React.createElement(Textarea, {
      label: 'Both Directions',
      resize: 'both',
      placeholder: 'Can resize both ways'
    }),
    React.createElement(Textarea, {
      label: 'No Resize',
      resize: 'none',
      placeholder: 'Cannot resize'
    })
  )
} 