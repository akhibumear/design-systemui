import React, { forwardRef, useState } from 'react'
import { cn } from '../../utils/cn'

const Navbar = forwardRef(({
  children,
  className,
  variant = 'default',
  position = 'static',
  border = true,
  shadow = false,
  ...props
}, ref) => {
  const variants = {
    default: 'bg-white dark:bg-secondary-900',
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-100 dark:bg-secondary-800',
    transparent: 'bg-transparent'
  }

  const positions = {
    static: 'relative',
    fixed: 'fixed top-0 left-0 right-0 z-50',
    sticky: 'sticky top-0 z-50'
  }

  const baseClasses = 'w-full px-4 sm:px-6 lg:px-8'
  const variantClasses = variants[variant] || variants.default
  const positionClasses = positions[position] || positions.static
  const borderClasses = border ? 'border-b border-secondary-200 dark:border-secondary-700' : ''
  const shadowClasses = shadow ? 'shadow-sm' : ''

  return (
    <nav
      ref={ref}
      className={cn(baseClasses, variantClasses, positionClasses, borderClasses, shadowClasses, className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {children}
        </div>
      </div>
    </nav>
  )
})

const NavbarBrand = forwardRef(({
  children,
  className,
  href,
  onClick,
  ...props
}, ref) => {
  const Component = href ? 'a' : 'div'
  
  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      className={cn('flex items-center text-lg font-semibold', href && 'hover:opacity-80 transition-opacity', className)}
      {...props}
    >
      {children}
    </Component>
  )
})

const NavbarContent = forwardRef(({
  children,
  className,
  justify = 'start',
  ...props
}, ref) => {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between'
  }

  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-4', justifyClasses[justify], className)}
      {...props}
    >
      {children}
    </div>
  )
})

const NavbarItem = forwardRef(({
  children,
  className,
  active = false,
  href,
  onClick,
  ...props
}, ref) => {
  const Component = href ? 'a' : 'button'
  
  const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const activeClasses = active 
    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300'
    : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50 dark:text-secondary-300 dark:hover:text-secondary-100 dark:hover:bg-secondary-800'

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      className={cn(baseClasses, activeClasses, className)}
      {...props}
    >
      {children}
    </Component>
  )
})

const NavbarToggle = forwardRef(({
  className,
  isOpen = false,
  onClick,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 dark:hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500',
        className
      )}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className={cn('h-6 w-6 transition-transform', isOpen && 'rotate-90')}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
})

const NavbarMenu = forwardRef(({
  children,
  className,
  isOpen = false,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'md:hidden transition-all duration-200 ease-in-out overflow-hidden',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        className
      )}
      {...props}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 border-t border-secondary-200 dark:border-secondary-700">
        {children}
      </div>
    </div>
  )
})

NavbarBrand.displayName = 'NavbarBrand'
NavbarContent.displayName = 'NavbarContent'
NavbarItem.displayName = 'NavbarItem'
NavbarToggle.displayName = 'NavbarToggle'
NavbarMenu.displayName = 'NavbarMenu'
Navbar.displayName = 'Navbar'

// Attach components to Navbar
Navbar.Brand = NavbarBrand
Navbar.Content = NavbarContent
Navbar.Item = NavbarItem
Navbar.Toggle = NavbarToggle
Navbar.Menu = NavbarMenu

export default Navbar 