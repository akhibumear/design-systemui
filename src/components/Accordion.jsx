import React, { createContext, useContext, useState } from 'react'
import { cn } from '../utils/cn'

// Accordion Context
const AccordionContext = createContext()

// Main Accordion Component
const Accordion = ({ 
  children, 
  type = 'single', // 'single' or 'multiple'
  defaultValue,
  value: controlledValue,
  onValueChange,
  collapsible = false,
  className,
  ...props 
}) => {
  const [internalValue, setInternalValue] = useState(
    type === 'multiple' ? (defaultValue || []) : defaultValue
  )
  
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const handleValueChange = (itemValue) => {
    let newValue

    if (type === 'multiple') {
      const currentArray = Array.isArray(value) ? value : []
      if (currentArray.includes(itemValue)) {
        newValue = currentArray.filter(v => v !== itemValue)
      } else {
        newValue = [...currentArray, itemValue]
      }
    } else {
      // Single mode
      if (value === itemValue && collapsible) {
        newValue = undefined
      } else {
        newValue = itemValue
      }
    }

    if (!isControlled) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  const isItemOpen = (itemValue) => {
    if (type === 'multiple') {
      return Array.isArray(value) && value.includes(itemValue)
    }
    return value === itemValue
  }

  return (
    <AccordionContext.Provider value={{ 
      value, 
      onValueChange: handleValueChange, 
      type,
      isItemOpen
    }}>
      <div 
        className={cn('divide-y divide-gray-200', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// Accordion Item Component
export const AccordionItem = ({ 
  children, 
  value,
  disabled = false,
  className,
  ...props 
}) => {
  return (
    <div 
      className={cn('border-b border-secondary-200', className)}
      style={{ opacity: disabled ? 0.5 : 1 }}
      {...props}
    >
      {React.Children.map(children, child => 
        React.cloneElement(child, { value, disabled })
      )}
    </div>
  )
}

// Accordion Trigger Component
export const AccordionTrigger = ({ 
  children, 
  value,
  disabled = false,
  className,
  ...props 
}) => {
  const { onValueChange, isItemOpen } = useContext(AccordionContext)
  const isOpen = isItemOpen(value)

  const handleClick = () => {
    if (!disabled) {
      onValueChange(value)
    }
  }

  const baseStyles = {
    width: '100%',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'var(--color-secondary-900)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    textAlign: 'left',
    outline: 'none'
  }

  const hoverStyles = !disabled ? {
    backgroundColor: 'var(--color-secondary-50)'
  } : {}

  return (
    <button
      className={cn('group', className)}
      style={baseStyles}
      onClick={handleClick}
      disabled={disabled}
      aria-expanded={isOpen}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, hoverStyles)
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = 'transparent'
        }
      }}
      {...props}
    >
      <span style={{ flex: 1 }}>{children}</span>
      <svg
        style={{
          width: '16px',
          height: '16px',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease-in-out',
          color: 'var(--color-secondary-500)'
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

// Accordion Content Component
export const AccordionContent = ({ 
  children, 
  value,
  className,
  ...props 
}) => {
  const { isItemOpen } = useContext(AccordionContext)
  const isOpen = isItemOpen(value)

  return (
    <div
      style={{
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        maxHeight: isOpen ? '1000px' : '0px',
        opacity: isOpen ? 1 : 0
      }}
      {...props}
    >
      <div 
        className={cn('p-4 pt-0', className)}
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-secondary-600)',
          lineHeight: '1.6'
        }}
      >
        {children}
      </div>
    </div>
  )
}

Accordion.displayName = 'Accordion'
AccordionItem.displayName = 'AccordionItem'
AccordionTrigger.displayName = 'AccordionTrigger'
AccordionContent.displayName = 'AccordionContent'

export default Accordion 