import React, { forwardRef, useState } from 'react'
import { cn } from '../../utils/cn'

const Alert = forwardRef(({
  children,
  className,
  variant = 'default',
  dismissible = false,
  onDismiss,
  title,
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = useState(true)

  const variants = {
    default: 'bg-secondary-50 text-secondary-900 border-secondary-200 dark:bg-secondary-900 dark:text-secondary-100 dark:border-secondary-700',
    success: 'bg-success-50 text-success-900 border-success-200 dark:bg-success-900/20 dark:text-success-100 dark:border-success-800',
    warning: 'bg-warning-50 text-warning-900 border-warning-200 dark:bg-warning-900/20 dark:text-warning-100 dark:border-warning-800',
    error: 'bg-error-50 text-error-900 border-error-200 dark:bg-error-900/20 dark:text-error-100 dark:border-error-800',
    info: 'bg-primary-50 text-primary-900 border-primary-200 dark:bg-primary-900/20 dark:text-primary-100 dark:border-primary-800'
  }

  const icons = {
    success: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    error: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
    info: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    )
  }

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  const baseClasses = 'border rounded-lg p-4'
  const variantClasses = variants[variant] || variants.default

  return (
    <div
      ref={ref}
      className={cn(baseClasses, variantClasses, className)}
      {...props}
    >
      <div className="flex items-start gap-2.5">
        {variant !== 'default' && (
          <div className="flex-shrink-0 mt-0.5">
            {icons[variant]}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-medium mb-1 text-sm">
              {title}
            </h4>
          )}
          <div className={title ? 'text-sm' : ''}>
            {children}
          </div>
        </div>
        
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 mt-0.5 text-current opacity-60 hover:opacity-100 transition-opacity"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
})

Alert.displayName = 'Alert'

export default Alert 