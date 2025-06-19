import React, { createContext, useContext, useState } from 'react'
import { cn } from '../utils/cn'

// Tabs Context
const TabsContext = createContext()

// Main Tabs Component
const Tabs = ({ 
  children, 
  defaultValue, 
  value: controlledValue, 
  onValueChange,
  orientation = 'horizontal',
  className,
  ...props 
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const handleValueChange = (newValue) => {
    if (!isControlled) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange, orientation }}>
      <div 
        className={cn('flex', orientation === 'vertical' ? 'flex-row' : 'flex-col', className)}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

// Tabs List Component
export const TabsList = ({ children, className, ...props }) => {
  const { orientation } = useContext(TabsContext)
  
  return (
    <div 
      className={cn('flex', className)}
      style={{
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        borderBottom: orientation === 'horizontal' ? '1px solid var(--color-secondary-200)' : 'none',
        borderRight: orientation === 'vertical' ? '1px solid var(--color-secondary-200)' : 'none',
        marginBottom: orientation === 'horizontal' ? '1rem' : 0,
        marginRight: orientation === 'vertical' ? '1rem' : 0,
        minWidth: orientation === 'vertical' ? '200px' : 'auto'
      }}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  )
}

// Tabs Trigger Component
export const TabsTrigger = ({ 
  children, 
  value, 
  disabled = false,
  className,
  ...props 
}) => {
  const { value: activeValue, onValueChange, orientation } = useContext(TabsContext)
  const isActive = activeValue === value

  const handleClick = () => {
    if (!disabled) {
      onValueChange(value)
    }
  }

  const baseStyles = {
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    color: isActive ? 'var(--color-primary-600)' : 'var(--color-secondary-600)',
    opacity: disabled ? 0.5 : 1,
    outline: 'none'
  }

  const hoverStyles = !disabled && !isActive ? {
    color: 'var(--color-secondary-900)',
    backgroundColor: 'var(--color-secondary-50)'
  } : {}

  const activeIndicatorStyles = isActive ? {
    content: '""',
    position: 'absolute',
    backgroundColor: 'var(--color-primary-500)',
    ...(orientation === 'horizontal' ? {
      bottom: '-1px',
      left: 0,
      right: 0,
      height: '2px'
    } : {
      right: '-1px',
      top: 0,
      bottom: 0,
      width: '2px'
    })
  } : {}

  return (
    <button
      className={cn('relative', className)}
      style={baseStyles}
      onClick={handleClick}
      disabled={disabled}
      role="tab"
      aria-selected={isActive}
      onMouseEnter={(e) => {
        if (!disabled && !isActive) {
          Object.assign(e.target.style, hoverStyles)
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !isActive) {
          e.target.style.color = 'var(--color-secondary-600)'
          e.target.style.backgroundColor = 'transparent'
        }
      }}
      {...props}
    >
      {children}
      {isActive && (
        <div style={activeIndicatorStyles} />
      )}
    </button>
  )
}

// Tabs Content Component
export const TabsContent = ({ 
  children, 
  value, 
  className,
  ...props 
}) => {
  const { value: activeValue } = useContext(TabsContext)
  const isActive = activeValue === value

  if (!isActive) return null

  return (
    <div 
      className={cn('flex-1', className)}
      style={{
        animation: 'fadeIn 0.2s ease-in-out'
      }}
      role="tabpanel"
      {...props}
    >
      {children}
    </div>
  )
}

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'

export default Tabs 