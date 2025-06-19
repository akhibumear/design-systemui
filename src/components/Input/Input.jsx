import React, { forwardRef, useState } from 'react'
import { cn } from '../../utils/cn'

const Input = forwardRef(({
  className,
  type = 'text',
  label,
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  size = 'md',
  id,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false)

  const sizes = {
    sm: 'h-8 px-2 text-sm',
    md: 'h-10 px-3 text-sm',
    lg: 'h-12 px-4 text-base'
  }

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  
  const baseInputClasses = 'input'
  const sizeClasses = sizes[size] || sizes.md
  const errorClasses = error ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''
  const widthClasses = fullWidth ? 'w-full' : ''
  const iconPaddingLeft = leftIcon ? 'pl-10' : ''
  const iconPaddingRight = rightIcon ? 'pr-10' : ''

  return (
    <div className={cn('flex flex-col', fullWidth && 'w-full')}>
      {label && (
        <label 
          htmlFor={inputId}
          className={cn(
            'label mb-1.5',
            error && 'text-error-600 dark:text-error-400',
            disabled && 'opacity-50'
          )}
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 dark:text-secondary-500">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            baseInputClasses,
            sizeClasses,
            errorClasses,
            widthClasses,
            iconPaddingLeft,
            iconPaddingRight,
            disabled && 'cursor-not-allowed opacity-50',
            className
          )}
          onFocus={(e) => {
            setFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            props.onBlur?.(e)
          }}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 dark:text-secondary-500">
            {rightIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <div className="mt-1.5 text-sm">
          {error ? (
            <span className="text-error-600 dark:text-error-400 flex items-center gap-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </span>
          ) : (
            <span className="text-secondary-500 dark:text-secondary-400">
              {helperText}
            </span>
          )}
        </div>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input 