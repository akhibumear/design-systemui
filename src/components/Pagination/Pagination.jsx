import React, { forwardRef, useMemo } from 'react'
import { cn } from '../../utils/cn'

const Pagination = forwardRef(({
  className,
  currentPage = 1,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  siblingCount = 1,
  variant = 'default',
  size = 'md',
  ...props
}, ref) => {
  const variants = {
    default: '',
    outline: 'border',
    ghost: ''
  }

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5 // siblingCount + firstPage + lastPage + currentPage + 2*DOTS

    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPages

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
      return [...leftRange, '...', totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      )
      return [firstPageIndex, '...', ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      )
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex]
    }
  }, [totalPages, siblingCount, currentPage])

  const baseClasses = 'flex items-center space-x-1'
  const variantClasses = variants[variant] || variants.default
  const sizeClasses = sizes[size] || sizes.md

  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange?.(page)
    }
  }

  if (!totalPages || totalPages <= 1) return null

  return (
    <nav
      ref={ref}
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
      aria-label="Pagination Navigation"
      {...props}
    >
      {showFirstLast && (
        <PaginationItem
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          variant={variant}
          size={size}
        >
          <span className="sr-only">First page</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </PaginationItem>
      )}

      {showPrevNext && (
        <PaginationItem
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant={variant}
          size={size}
        >
          <span className="sr-only">Previous page</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </PaginationItem>
      )}

      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === '...') {
          return (
            <span
              key={`dots-${index}`}
              className="px-3 py-2 text-secondary-500 dark:text-secondary-400"
            >
              ...
            </span>
          )
        }

        return (
          <PaginationItem
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            active={pageNumber === currentPage}
            variant={variant}
            size={size}
          >
            {pageNumber}
          </PaginationItem>
        )
      })}

      {showPrevNext && (
        <PaginationItem
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant={variant}
          size={size}
        >
          <span className="sr-only">Next page</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </PaginationItem>
      )}

      {showFirstLast && (
        <PaginationItem
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          variant={variant}
          size={size}
        >
          <span className="sr-only">Last page</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zm6 0a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </PaginationItem>
      )}
    </nav>
  )
})

const PaginationItem = forwardRef(({
  children,
  className,
  active = false,
  disabled = false,
  onClick,
  variant = 'default',
  size = 'md',
  ...props
}, ref) => {
  const variants = {
    default: active
      ? 'bg-primary-600 text-white border-primary-600'
      : 'bg-white text-secondary-700 border-secondary-300 hover:bg-secondary-50 dark:bg-secondary-800 dark:text-secondary-300 dark:border-secondary-600 dark:hover:bg-secondary-700',
    outline: active
      ? 'bg-primary-600 text-white border-primary-600'
      : 'bg-transparent text-secondary-700 border-secondary-300 hover:bg-secondary-50 dark:text-secondary-300 dark:border-secondary-600 dark:hover:bg-secondary-800',
    ghost: active
      ? 'bg-primary-600 text-white'
      : 'bg-transparent text-secondary-700 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-800'
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs min-w-[24px] h-6',
    md: 'px-3 py-2 text-sm min-w-[32px] h-8',
    lg: 'px-4 py-2 text-base min-w-[40px] h-10'
  }

  const baseClasses = 'inline-flex items-center justify-center border rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
  const variantClasses = variants[variant] || variants.default
  const sizeClasses = sizes[size] || sizes.md
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'

  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses,
        sizeClasses,
        disabledClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

PaginationItem.displayName = 'PaginationItem'
Pagination.displayName = 'Pagination'

// Attach components to Pagination
Pagination.Item = PaginationItem

export default Pagination 