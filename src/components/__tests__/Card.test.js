import React from 'react'
import { render, screen } from '@testing-library/react'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card'

describe('Card', () => {
  test('renders card with children', () => {
    render(
      <Card>
        <div>Card content</div>
      </Card>
    )
    expect(screen.getByText(/card content/i)).toBeInTheDocument()
  })

  test('applies custom className', () => {
    render(
      <Card className="custom-class">
        <div>Content</div>
      </Card>
    )
    const card = screen.getByText(/content/i).parentElement
    expect(card).toHaveClass('custom-class')
  })

  test('renders complete card structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Main content here</p>
        </CardContent>
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      </Card>
    )

    expect(screen.getByText(/test title/i)).toBeInTheDocument()
    expect(screen.getByText(/test description/i)).toBeInTheDocument()
    expect(screen.getByText(/main content here/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument()
  })
}) 