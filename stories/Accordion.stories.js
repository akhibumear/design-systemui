import React, { useState } from 'react'
import Accordion, { AccordionItem, AccordionTrigger, AccordionContent } from '../src/components/Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => React.createElement(Accordion, { 
    type: 'single', 
    collapsible: true,
    style: { width: '400px' }
  },
    React.createElement(AccordionItem, { value: 'item-1' },
      React.createElement(AccordionTrigger, {}, 'What is React?'),
      React.createElement(AccordionContent, {},
        'React is a JavaScript library for building user interfaces.'
      )
    ),
    React.createElement(AccordionItem, { value: 'item-2' },
      React.createElement(AccordionTrigger, {}, 'How do I get started?'),
      React.createElement(AccordionContent, {},
        'You can get started with React by visiting the official documentation.'
      )
    ),
    React.createElement(AccordionItem, { value: 'item-3' },
      React.createElement(AccordionTrigger, {}, 'Is it accessible?'),
      React.createElement(AccordionContent, {},
        'Yes! This accordion component follows WAI-ARIA design patterns.'
      )
    )
  )
}

export const Multiple = {
  render: () => React.createElement(Accordion, { 
    type: 'multiple',
    style: { width: '400px' }
  },
    React.createElement(AccordionItem, { value: 'features' },
      React.createElement(AccordionTrigger, {}, 'Features'),
      React.createElement(AccordionContent, {},
        'Fully customizable, keyboard accessible, smooth animations.'
      )
    ),
    React.createElement(AccordionItem, { value: 'installation' },
      React.createElement(AccordionTrigger, {}, 'Installation'),
      React.createElement(AccordionContent, {},
        'Install using: npm install design-systemui'
      )
    ),
    React.createElement(AccordionItem, { value: 'usage' },
      React.createElement(AccordionTrigger, {}, 'Usage'),
      React.createElement(AccordionContent, {},
        'Import and use the components in your React application.'
      )
    )
  )
}

export const Controlled = {
  render: () => {
    const [value, setValue] = useState('item-1')
    return React.createElement(Accordion, { 
      type: 'single',
      value: value,
      onValueChange: setValue,
      style: { width: '400px' }
    },
      React.createElement(AccordionItem, { value: 'item-1' },
        React.createElement(AccordionTrigger, {}, 'Controlled Item 1'),
        React.createElement(AccordionContent, {},
          'This accordion is controlled. The current value is: ' + (value || 'none')
        )
      ),
      React.createElement(AccordionItem, { value: 'item-2' },
        React.createElement(AccordionTrigger, {}, 'Controlled Item 2'),
        React.createElement(AccordionContent, {},
          'You can control which items are open programmatically.'
        )
      ),
      React.createElement(AccordionItem, { value: 'item-3' },
        React.createElement(AccordionTrigger, {}, 'Controlled Item 3'),
        React.createElement(AccordionContent, {},
          'This is useful for complex state management scenarios.'
        )
      )
    )
  }
}

export const FAQ = {
  render: () => React.createElement(Accordion, { 
    type: 'single', 
    collapsible: true,
    style: { width: '500px' }
  },
    React.createElement(AccordionItem, { value: 'shipping' },
      React.createElement(AccordionTrigger, {}, 'How long does shipping take?'),
      React.createElement(AccordionContent, {},
        React.createElement('div', {},
          React.createElement('p', { style: { margin: '0 0 0.75rem 0' } }, 'Shipping times vary by location:'),
          React.createElement('ul', { style: { margin: 0, paddingLeft: '1.5rem' } },
            React.createElement('li', {}, 'Domestic: 3-5 business days'),
            React.createElement('li', {}, 'International: 7-14 business days'),
            React.createElement('li', {}, 'Express: 1-2 business days (additional cost)')
          )
        )
      )
    ),
    React.createElement(AccordionItem, { value: 'returns' },
      React.createElement(AccordionTrigger, {}, 'What is your return policy?'),
      React.createElement(AccordionContent, {},
        'We offer a 30-day return policy for all items. Items must be in original condition with tags attached. Return shipping costs are covered by the customer unless the item was defective or incorrect.'
      )
    ),
    React.createElement(AccordionItem, { value: 'warranty' },
      React.createElement(AccordionTrigger, {}, 'Do you offer warranties?'),
      React.createElement(AccordionContent, {},
        React.createElement('div', {},
          React.createElement('p', { style: { margin: '0 0 0.75rem 0' } }, 'Yes, we offer different warranty options:'),
          React.createElement('ul', { style: { margin: 0, paddingLeft: '1.5rem' } },
            React.createElement('li', {}, 'Standard: 1 year manufacturer warranty'),
            React.createElement('li', {}, 'Extended: 2-3 years (available for purchase)'),
            React.createElement('li', {}, 'Premium: Lifetime warranty on select items')
          )
        )
      )
    ),
    React.createElement(AccordionItem, { value: 'support' },
      React.createElement(AccordionTrigger, {}, 'How can I contact support?'),
      React.createElement(AccordionContent, {},
        React.createElement('div', {},
          React.createElement('p', { style: { margin: '0 0 0.75rem 0' } }, 'You can reach our support team through:'),
          React.createElement('ul', { style: { margin: 0, paddingLeft: '1.5rem' } },
            React.createElement('li', {}, 'Email: support@example.com'),
            React.createElement('li', {}, 'Phone: 1-800-123-4567'),
            React.createElement('li', {}, 'Live Chat: Available 9 AM - 6 PM EST'),
            React.createElement('li', {}, 'Help Center: Visit our online help center')
          )
        )
      )
    )
  )
} 