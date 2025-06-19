import React, { forwardRef, createContext, useContext } from 'react'
import { cn } from '../utils/cn'

// Radio Group Context
const RadioGroupContext = createContext()

// Radio Group Component
export const RadioGroup = ({ 
  children, 
  value, 
  onChange, 
  name, 
  disabled = false,
  className,
  ...props 
}) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange, name, disabled }}>
      <div 
        className={cn('flex flex-col gap-2', className)}
        role="radiogroup"
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

// Radio Component
const Radio = forwardRef(({
  className,
  label,
  description,
  error,
  disabled: propDisabled,
  size = 'md',
  value,
  checked: propChecked,
  onChange: propOnChange,
  name: propName,
  ...props
}, ref) => {
  const context = useContext(RadioGroupContext)
  
  // Use context values if available, otherwise use props
  const name = propName || context?.name
  const disabled = propDisabled || context?.disabled
  const checked = propChecked !== undefined ? propChecked : context?.value === value
  const onChange = propOnChange || context?.onChange

  const sizeStyles = {
    sm: {
      width: '16px',
      height: '16px',
      fontSize: '0.875rem'
    },
    md: {
      width: '18px',
      height: '18px',
      fontSize: '0.875rem'
    },
    lg: {
      width: '20px',
      height: '20px',
      fontSize: '1rem'
    }
  }

  const radioStyles = {
    width: sizeStyles[size].width,
    height: sizeStyles[size].height,
    borderRadius: '50%',
    border: '2px solid var(--color-secondary-300)',
    backgroundColor: 'var(--color-white)',
    borderColor: checked ? 'var(--color-primary-500)' : 'var(--color-secondary-300)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  }

  const disabledStyles = disabled ? {
    backgroundColor: 'var(--color-secondary-100)',
    borderColor: 'var(--color-secondary-200)',
    cursor: 'not-allowed'
  } : {}

  const errorStyles = error ? {
    borderColor: 'var(--color-error-500)'
  } : {}

  const handleChange = (e) => {
    if (!disabled) {
      if (context?.onChange) {
        context.onChange(value, e)
      } else {
        propOnChange?.(e)
      }
    }
  }

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <label 
        style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '0.75rem',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1
        }}
      >
        <div style={{ position: 'relative', marginTop: '0.125rem' }}>
          <input
            ref={ref}
            type="radio"
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            style={{
              position: 'absolute',
              opacity: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              cursor: disabled ? 'not-allowed' : 'pointer'
            }}
            {...props}
          />
          <div 
            style={{
              ...radioStyles,
              ...disabledStyles,
              ...errorStyles
            }}
          >
            {checked && (
              <div 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: disabled ? 'var(--color-secondary-400)' : 'var(--color-primary-500)'
                }}
              />
            )}
          </div>
        </div>
        
        {(label || description) && (
          <div style={{ flex: 1 }}>
            {label && (
              <div style={{ 
                fontSize: sizeStyles[size].fontSize, 
                fontWeight: '500', 
                color: 'var(--color-secondary-900)',
                lineHeight: '1.4'
              }}>
                {label}
              </div>
            )}
            {description && (
              <div style={{ 
                fontSize: '0.75rem', 
                color: 'var(--color-secondary-600)',
                marginTop: '0.125rem',
                lineHeight: '1.4'
              }}>
                {description}
              </div>
            )}
          </div>
        )}
      </label>
      
      {error && (
        <p style={{ 
          fontSize: '0.75rem', 
          color: 'var(--color-error-600)',
          marginTop: '0.25rem',
          marginLeft: `calc(${sizeStyles[size].width} + 0.75rem)`
        }}>
          {error}
        </p>
      )}
    </div>
  )
})

Radio.displayName = 'Radio'

export default Radio 