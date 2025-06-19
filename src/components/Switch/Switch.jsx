import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Switch = forwardRef(({
  className,
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  description,
  id,
  ...props
}, ref) => {
  const sizes = {
    sm: {
      switch: 'w-8 h-4',
      thumb: 'w-3 h-3',
      translate: 'translate-x-4'
    },
    md: {
      switch: 'w-11 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-5'
    },
    lg: {
      switch: 'w-14 h-8',
      thumb: 'w-7 h-7',
      translate: 'translate-x-6'
    }
  }

  const sizeConfig = sizes[size] || sizes.md
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`

  const handleChange = (e) => {
    if (disabled) return
    onChange?.(e.target.checked, e)
  }

  return (
    <div className="flex items-start gap-3">
      <div className="relative">
        <input
          ref={ref}
          id={switchId}
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <label
          htmlFor={switchId}
          className={cn(
            'relative inline-flex items-center rounded-full transition-colors duration-200 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-secondary-800',
            sizeConfig.switch,
            checked 
              ? 'bg-primary-600' 
              : 'bg-secondary-200 dark:bg-secondary-700',
            disabled 
              ? 'opacity-50 cursor-not-allowed' 
              : 'cursor-pointer',
            className
          )}
        >
          <span
            className={cn(
              'inline-block bg-white rounded-full shadow-sm transition-transform duration-200 transform',
              sizeConfig.thumb,
              checked ? sizeConfig.translate : 'translate-x-0.5'
            )}
          />
        </label>
      </div>
      
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={switchId}
              className={cn(
                'text-sm font-medium text-secondary-900 dark:text-secondary-100',
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <span className="text-sm text-secondary-500 dark:text-secondary-400">
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  )
})

Switch.displayName = 'Switch'

export default Switch 