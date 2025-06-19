import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Badge = forwardRef(({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}, ref) => {
  const variants = {
    default: 'bg-secondary-100 text-secondary-900 dark:bg-secondary-800 dark:text-secondary-100',
    primary: 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100',
    secondary: 'bg-secondary-100 text-secondary-900 dark:bg-secondary-800 dark:text-secondary-100',
    success: 'bg-success-100 text-success-900 dark:bg-success-900 dark:text-success-100',
    warning: 'bg-warning-100 text-warning-900 dark:bg-warning-900 dark:text-warning-100',
    error: 'bg-error-100 text-error-900 dark:bg-error-900 dark:text-error-100',
    outline: 'border border-secondary-300 bg-transparent text-secondary-700 dark:border-secondary-700 dark:text-secondary-300'
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base'
  }

  const baseClasses = 'inline-flex items-center rounded-full font-medium'
  const variantClasses = variants[variant] || variants.default
  const sizeClasses = sizes[size] || sizes.md

  return (
    <span
      ref={ref}
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
      {...props}
    >
      {children}
    </span>
  )
})

Badge.displayName = 'Badge'

export default Badge 