import '@testing-library/jest-dom'

// Mock CSS custom properties for tests
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop) => {
      const mockValues = {
        '--color-primary-500': '#3b82f6',
        '--color-secondary-500': '#6b7280',
        '--color-success-500': '#10b981',
        '--color-warning-500': '#f59e0b',
        '--color-error-500': '#ef4444',
        '--color-white': '#ffffff',
        '--color-secondary-50': '#f9fafb',
        '--color-secondary-100': '#f3f4f6',
        '--color-secondary-200': '#e5e7eb',
        '--color-secondary-300': '#d1d5db',
        '--color-secondary-600': '#4b5563',
        '--color-secondary-900': '#111827'
      }
      return mockValues[prop] || ''
    }
  })
})

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb
  }
  observe() {}
  unobserve() {}
  disconnect() {}
} 