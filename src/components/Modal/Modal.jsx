import React, { useEffect, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'

const Modal = forwardRef(({
  children,
  isOpen = false,
  onClose,
  title,
  description,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  className,
  overlayClassName,
  ...props
}, ref) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-7xl'
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose?.()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeOnEsc, onClose])

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose?.()
    }
  }

  if (!isOpen) return null

  const modal = (
    <div 
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4',
        'bg-black bg-opacity-50 backdrop-blur-sm',
        'animate-in fade-in duration-200',
        overlayClassName
      )}
      onClick={handleOverlayClick}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
        className={cn(
          'relative w-full bg-white dark:bg-secondary-800 rounded-lg shadow-xl',
          'animate-in slide-in-from-bottom-4 duration-200',
          'max-h-[90vh] overflow-y-auto',
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-secondary-200 dark:border-secondary-700">
            <div>
              {title && (
                <h2 
                  id="modal-title" 
                  className="text-lg font-semibold text-secondary-900 dark:text-secondary-100"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p 
                  id="modal-description" 
                  className="mt-1 text-sm text-secondary-600 dark:text-secondary-400"
                >
                  {description}
                </p>
              )}
            </div>
            
            {showCloseButton && (
              <button
                onClick={onClose}
                className={cn(
                  'p-1 rounded-md text-secondary-400 hover:text-secondary-600',
                  'hover:bg-secondary-100 dark:hover:bg-secondary-700',
                  'transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500'
                )}
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={cn(
          'p-6',
          (title || showCloseButton) ? 'pt-0' : ''
        )}>
          {children}
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
})

Modal.displayName = 'Modal'

const ModalHeader = forwardRef(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mb-4', className)}
      {...props}
    >
      {children}
    </div>
  )
})

ModalHeader.displayName = 'ModalHeader'

const ModalBody = forwardRef(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mb-6', className)}
      {...props}
    >
      {children}
    </div>
  )
})

ModalBody.displayName = 'ModalBody'

const ModalFooter = forwardRef(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-end gap-3 pt-4 border-t border-secondary-200 dark:border-secondary-700', className)}
      {...props}
    >
      {children}
    </div>
  )
})

ModalFooter.displayName = 'ModalFooter'

export default Modal
export { ModalHeader, ModalBody, ModalFooter } 