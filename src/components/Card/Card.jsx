import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Card = forwardRef(({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  shadow = true,
  style,
  ...props
}, ref) => {
  const paddings = {
    none: '0',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  }

  const baseStyle = {
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    border: '1px solid var(--color-secondary-200)',
    boxShadow: shadow ? 'var(--shadow-card)' : 'none',
    padding: paddings[padding] || paddings.md,
    transition: hoverable ? 'box-shadow 0.2s ease-in-out' : 'none',
    cursor: hoverable ? 'pointer' : 'default',
    ...style
  }

  const hoverStyle = hoverable ? {
    ':hover': {
      boxShadow: 'var(--shadow-card-hover)'
    }
  } : {}

  // Handle variant styles
  if (variant === 'outline') {
    baseStyle.backgroundColor = 'transparent'
    baseStyle.border = '1px solid var(--color-secondary-200)'
  } else if (variant === 'filled') {
    baseStyle.backgroundColor = 'var(--color-secondary-50)'
    baseStyle.border = '0'
  } else if (variant === 'elevated') {
    baseStyle.boxShadow = 'var(--shadow-card-hover)'
  }

  return (
    <div
      ref={ref}
      className={cn('card', className)}
      style={baseStyle}
      onMouseEnter={hoverable ? (e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
      } : undefined}
      onMouseLeave={hoverable ? (e) => {
        e.currentTarget.style.boxShadow = shadow ? 'var(--shadow-card)' : 'none'
      } : undefined}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

const CardHeader = forwardRef(({
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('card-header', className)}
      style={{
        marginBottom: '1rem',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
})

CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef(({
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('card-title', className)}
      style={{
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--color-secondary-900)',
        margin: 0,
        ...style
      }}
      {...props}
    >
      {children}
    </h3>
  )
})

CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef(({
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <p
      ref={ref}
      className={cn('card-description', className)}
      style={{
        fontSize: '0.875rem',
        color: 'var(--color-secondary-600)',
        marginTop: '0.25rem',
        margin: '0.25rem 0 0 0',
        ...style
      }}
      {...props}
    >
      {children}
    </p>
  )
})

CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef(({
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('card-content', className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
})

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef(({
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('card-footer', className)}
      style={{
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
})

CardFooter.displayName = 'CardFooter'

export default Card
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } 