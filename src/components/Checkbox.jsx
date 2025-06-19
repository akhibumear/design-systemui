import React, { forwardRef } from 'react'
import { cn } from '../utils/cn'

const Checkbox = forwardRef(({
  className,
  label,
  description,
  error,
  disabled,
  size = 'md',
  checked,
  onChange,
  ...props
}, ref) => {
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

  const checkboxStyles = {
    width: sizeStyles[size].width,
    height: sizeStyles[size].height,
    borderRadius: '0.25rem',
    border: '2px solid var(--color-secondary-300)',
    backgroundColor: checked ? 'var(--color-primary-500)' : 'var(--color-white)',
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
      onChange?.(e.target.checked, e)
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
            type="checkbox"
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
              ...checkboxStyles,
              ...disabledStyles,
              ...errorStyles
            }}
          >
            {checked && (
              <svg 
                style={{ 
                  width: '12px', 
                  height: '12px', 
                  color: 'white',
                  strokeWidth: 2
                }} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
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

Checkbox.displayName = 'Checkbox'

export default Checkbox 