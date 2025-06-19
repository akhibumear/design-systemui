import React, { useState } from 'react';
import { Switch } from '../src';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return React.createElement(Switch, {
      checked: checked,
      onChange: setChecked,
      label: 'Enable notifications',
      description: 'Receive email notifications about updates'
    });
  },
};

export const Sizes = {
  render: () => {
    const [states, setStates] = useState({ sm: false, md: true, lg: false });
    
    return React.createElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '1rem' }
    }, [
      React.createElement(Switch, {
        key: 'sm',
        size: 'sm',
        checked: states.sm,
        onChange: (checked) => setStates(prev => ({ ...prev, sm: checked })),
        label: 'Small Switch',
        description: 'This is a small switch'
      }),
      React.createElement(Switch, {
        key: 'md',
        size: 'md',
        checked: states.md,
        onChange: (checked) => setStates(prev => ({ ...prev, md: checked })),
        label: 'Medium Switch',
        description: 'This is a medium switch (default)'
      }),
      React.createElement(Switch, {
        key: 'lg',
        size: 'lg',
        checked: states.lg,
        onChange: (checked) => setStates(prev => ({ ...prev, lg: checked })),
        label: 'Large Switch',
        description: 'This is a large switch'
      }),
    ]);
  },
};

export const States = {
  render: () => {
    const [states, setStates] = useState({ 
      enabled: true, 
      disabled: false, 
      disabledChecked: true 
    });
    
    return React.createElement('div', {
      style: { display: 'flex', flexDirection: 'column', gap: '1rem' }
    }, [
      React.createElement(Switch, {
        key: 'enabled',
        checked: states.enabled,
        onChange: (checked) => setStates(prev => ({ ...prev, enabled: checked })),
        label: 'Enabled Switch',
        description: 'This switch can be toggled'
      }),
      React.createElement(Switch, {
        key: 'disabled',
        checked: states.disabled,
        onChange: (checked) => setStates(prev => ({ ...prev, disabled: checked })),
        disabled: true,
        label: 'Disabled Switch (Off)',
        description: 'This switch is disabled'
      }),
      React.createElement(Switch, {
        key: 'disabledChecked',
        checked: states.disabledChecked,
        onChange: (checked) => setStates(prev => ({ ...prev, disabledChecked: checked })),
        disabled: true,
        label: 'Disabled Switch (On)',
        description: 'This switch is disabled but checked'
      }),
    ]);
  },
}; 