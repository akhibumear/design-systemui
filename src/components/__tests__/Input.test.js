import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../Input'

describe('Input', () => {
  test('renders input with label', () => {
    render(<Input label="Test Label" />)
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
  })

  test('handles value changes', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    
    render(<Input label="Test Input" onChange={handleChange} />)
    const input = screen.getByLabelText(/test input/i)
    
    await user.type(input, 'test value')
    expect(handleChange).toHaveBeenCalled()
  })

  test('shows error state', () => {
    render(<Input label="Test Input" error="This field is required" />)
    expect(screen.getByText(/this field is required/i)).toBeInTheDocument()
  })

  test('renders with helper text', () => {
    render(<Input label="Test Input" helperText="Helpful information" />)
    expect(screen.getByText(/helpful information/i)).toBeInTheDocument()
  })

  test('can be disabled', () => {
    render(<Input label="Test Input" disabled />)
    expect(screen.getByLabelText(/test input/i)).toBeDisabled()
  })

  test('renders with icons', () => {
    const leftIcon = <span data-testid="left-icon">🔍</span>
    const rightIcon = <span data-testid="right-icon">✅</span>
    
    render(
      <Input 
        label="Test Input" 
        leftIcon={leftIcon} 
        rightIcon={rightIcon} 
      />
    )
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
  })

  test('validates required fields', () => {
    render(<Input label="Required Field" required />)
    const input = screen.getByLabelText(/required field/i)
    expect(input).toHaveAttribute('required')
  })
}) 