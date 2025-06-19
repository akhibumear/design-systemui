import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Skeleton = forwardRef(({
  className,
  variant = 'default',
  animation = 'pulse',
  width,
  height,
  rounded = 'md',
  children,
  ...props
}, ref) => {
  const variants = {
    default: 'bg-secondary-200 dark:bg-secondary-700',
    text: 'bg-secondary-200 dark:bg-secondary-700',
    circular: 'bg-secondary-200 dark:bg-secondary-700 rounded-full',
    rectangular: 'bg-secondary-200 dark:bg-secondary-700',
    avatar: 'bg-secondary-200 dark:bg-secondary-700 rounded-full w-10 h-10',
    button: 'bg-secondary-200 dark:bg-secondary-700 rounded-md h-10',
    card: 'bg-secondary-200 dark:bg-secondary-700 rounded-lg'
  }

  const animations = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: ''
  }

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  }

  const baseClasses = 'block'
  const variantClasses = variants[variant] || variants.default
  const animationClasses = animations[animation] || animations.pulse
  const roundedClass = variant === 'circular' || variant === 'avatar' ? '' : roundedClasses[rounded]

  const style = {
    ...(width && { width }),
    ...(height && { height })
  }

  if (children) {
    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses, animationClasses, roundedClass, className)}
        style={style}
        {...props}
      >
        <div className="opacity-0">{children}</div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(baseClasses, variantClasses, animationClasses, roundedClass, className)}
      style={style}
      {...props}
    />
  )
})

Skeleton.displayName = 'Skeleton'

export default Skeleton 