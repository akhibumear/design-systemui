import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Breadcrumbs = forwardRef(({
  children,
  className,
  separator = '/',
  variant = 'default',
  ...props
}, ref) => {
  const variants = {
    default: 'text-secondary-600 dark:text-secondary-400',
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-secondary-800 dark:text-secondary-200'
  }

  const baseClasses = 'flex items-center space-x-1 text-sm'
  const variantClasses = variants[variant] || variants.default

  const childrenArray = React.Children.toArray(children)

  return (
    <nav
      ref={ref}
      className={cn(baseClasses, variantClasses, className)}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center space-x-1">
        {childrenArray.map((child, index) => (
          <li key={index} className="flex items-center">
            {child}
            {index < childrenArray.length - 1 && (
              <span className="mx-2 text-secondary-400 dark:text-secondary-600 select-none">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
})

const BreadcrumbItem = forwardRef(({
  children,
  className,
  href,
  active = false,
  onClick,
  ...props
}, ref) => {
  const Component = href ? 'a' : active ? 'span' : 'button'

  const baseClasses = 'transition-colors hover:text-primary-600 dark:hover:text-primary-400'
  const activeClasses = active 
    ? 'text-secondary-900 dark:text-secondary-100 font-medium cursor-default'
    : 'text-secondary-600 dark:text-secondary-400'

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      className={cn(
        !active && baseClasses,
        activeClasses,
        className
      )}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {children}
    </Component>
  )
})

BreadcrumbItem.displayName = 'BreadcrumbItem'
Breadcrumbs.displayName = 'Breadcrumbs'

// Attach components to Breadcrumbs
Breadcrumbs.Item = BreadcrumbItem

export default Breadcrumbs 