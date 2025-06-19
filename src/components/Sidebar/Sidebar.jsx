import React, { forwardRef, useState, createContext, useContext } from 'react'
import { cn } from '../../utils/cn'

const SidebarContext = createContext({})

const Sidebar = forwardRef(({
  children,
  className,
  variant = 'default',
  width = 'md',
  collapsible = false,
  defaultCollapsed = false,
  position = 'left',
  overlay = false,
  ...props
}, ref) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  const variants = {
    default: 'bg-white border-secondary-200 dark:bg-secondary-900 dark:border-secondary-700',
    primary: 'bg-primary-50 border-primary-200 dark:bg-primary-900/20 dark:border-primary-700',
    secondary: 'bg-secondary-50 border-secondary-200 dark:bg-secondary-800 dark:border-secondary-700'
  }

  const widths = {
    sm: isCollapsed ? 'w-16' : 'w-48',
    md: isCollapsed ? 'w-16' : 'w-64',
    lg: isCollapsed ? 'w-16' : 'w-80',
    xl: isCollapsed ? 'w-16' : 'w-96'
  }

  const positions = {
    left: 'left-0',
    right: 'right-0'
  }

  const baseClasses = 'h-full border-r flex flex-col transition-all duration-300 ease-in-out'
  const variantClasses = variants[variant] || variants.default
  const widthClasses = widths[width] || widths.md
  const positionClasses = positions[position] || positions.left
  const overlayClasses = overlay ? 'fixed top-0 z-40' : 'relative'

  const contextValue = {
    isCollapsed,
    setIsCollapsed,
    collapsible
  }

  return (
    <SidebarContext.Provider value={contextValue}>
      <aside
        ref={ref}
        className={cn(baseClasses, variantClasses, widthClasses, positionClasses, overlayClasses, className)}
        {...props}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  )
})

const SidebarHeader = forwardRef(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('p-4 border-b border-secondary-200 dark:border-secondary-700', className)}
      {...props}
    >
      {children}
    </div>
  )
})

const SidebarContent = forwardRef(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex-1 overflow-y-auto py-4', className)}
      {...props}
    >
      {children}
    </div>
  )
})

const SidebarFooter = forwardRef(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('p-4 border-t border-secondary-200 dark:border-secondary-700', className)}
      {...props}
    >
      {children}
    </div>
  )
})

const SidebarGroup = forwardRef(({
  children,
  className,
  title,
  ...props
}, ref) => {
  const { isCollapsed } = useContext(SidebarContext)

  return (
    <div
      ref={ref}
      className={cn('px-4 mb-4', className)}
      {...props}
    >
      {title && !isCollapsed && (
        <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wider mb-2">
          {title}
        </h3>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
})

const SidebarItem = forwardRef(({
  children,
  className,
  active = false,
  icon,
  href,
  onClick,
  ...props
}, ref) => {
  const { isCollapsed } = useContext(SidebarContext)
  const Component = href ? 'a' : 'button'

  const baseClasses = 'w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors'
  const activeClasses = active
    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300'
    : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:text-secondary-100 dark:hover:bg-secondary-800'

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      className={cn(baseClasses, activeClasses, className)}
      title={isCollapsed ? children : undefined}
      {...props}
    >
      {icon && (
        <span className={cn('flex-shrink-0', !isCollapsed && 'mr-3')}>
          {icon}
        </span>
      )}
      {!isCollapsed && (
        <span className="truncate">{children}</span>
      )}
    </Component>
  )
})

const SidebarToggle = forwardRef(({
  className,
  ...props
}, ref) => {
  const { isCollapsed, setIsCollapsed, collapsible } = useContext(SidebarContext)

  if (!collapsible) return null

  return (
    <button
      ref={ref}
      onClick={() => setIsCollapsed(!isCollapsed)}
      className={cn(
        'p-2 rounded-md text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors',
        className
      )}
      {...props}
    >
      <svg
        className={cn('h-5 w-5 transition-transform', isCollapsed && 'rotate-180')}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </svg>
    </button>
  )
})

SidebarHeader.displayName = 'SidebarHeader'
SidebarContent.displayName = 'SidebarContent'
SidebarFooter.displayName = 'SidebarFooter'
SidebarGroup.displayName = 'SidebarGroup'
SidebarItem.displayName = 'SidebarItem'
SidebarToggle.displayName = 'SidebarToggle'
Sidebar.displayName = 'Sidebar'

// Attach components to Sidebar
Sidebar.Header = SidebarHeader
Sidebar.Content = SidebarContent
Sidebar.Footer = SidebarFooter
Sidebar.Group = SidebarGroup
Sidebar.Item = SidebarItem
Sidebar.Toggle = SidebarToggle

export default Sidebar 