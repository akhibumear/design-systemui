import React, { forwardRef } from 'react'
import { cn } from '../utils/cn'

const Textarea = forwardRef(({
  className,
  label,
  error,
  helperText,
  required,
  disabled,
  size = 'md',
  rows = 4,
  resize = 'vertical',
  ...props
}, ref) => {
  const sizeStyles = {
    sm: {
      fontSize: '0.875rem',
      padding: '0.5rem 0.75rem',
      minHeight: '2rem'
    },
    md: {
      fontSize: '0.875rem', 
      padding: '0.625rem 0.875rem',
      minHeight: '2.5rem'
    },
    lg: {
      fontSize: '1rem',
      padding: '0.75rem 1rem',
      minHeight: '3rem'
    }
  }

  const baseStyles = {
    width: '100%',
    borderRadius: '0.375rem',
    border: '1px solid var(--color-secondary-300)',
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-secondary-900)',
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'inherit',
    resize: resize,
    outline: 'none',
    ...sizeStyles[size]
  }

  const focusStyles = {
    borderColor: 'var(--color-primary-500)',
    boxShadow: '0 0 0 3px var(--color-primary-100)'
  }

  const errorStyles = error ? {
    borderColor: 'var(--color-error-500)',
    boxShadow: '0 0 0 3px var(--color-error-100)'
  } : {}

  const disabledStyles = disabled ? {
    backgroundColor: 'var(--color-secondary-50)',
    color: 'var(--color-secondary-400)',
    cursor: 'not-allowed'
  } : {}

  const handleFocus = (e) => {
    if (!disabled && !error) {
      Object.assign(e.target.style, focusStyles)
    }
    props.onFocus?.(e)
  }

  const handleBlur = (e) => {
    if (!error) {
      e.target.style.borderColor = 'var(--color-secondary-300)'
      e.target.style.boxShadow = 'none'
    }
    props.onBlur?.(e)
  }

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <label 
          style={{ 
            fontSize: '0.875rem', 
            fontWeight: '500', 
            color: 'var(--color-secondary-700)',
            marginBottom: '0.25rem'
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--color-error-500)' }}> *</span>}
        </label>
      )}
      
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        required={required}
        style={{
          ...baseStyles,
          ...errorStyles,
          ...disabledStyles
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      
      {(error || helperText) && (
        <p style={{ 
          fontSize: '0.75rem', 
          color: error ? 'var(--color-error-600)' : 'var(--color-secondary-500)',
          marginTop: '0.25rem'
        }}>
          {error || helperText}
        </p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea 