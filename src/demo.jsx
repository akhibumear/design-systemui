import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  ThemeProvider, 
  useTheme, 
  Button, 
  Input, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter,
  Badge,
  Alert,
  Switch,
  Modal,
  ModalBody,
  ModalFooter
} from './index.js'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <Button 
      onClick={toggleTheme}
      variant="ghost"
      size="sm"
      style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </Button>
  )
}

function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notifications: false
  })
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
    alert('Form submitted!')
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--color-secondary-50)', 
      padding: '2rem' 
    }}>
      <div style={{ 
        maxWidth: '80rem', 
        margin: '0 auto', 
        padding: '0 1rem' 
      }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '3rem' 
        }}>
          <div>
            <h1 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              color: 'var(--color-secondary-900)',
              margin: 0,
              marginBottom: '0.25rem'
            }}>
              Design System UI
            </h1>
            <p style={{ 
              fontSize: '0.875rem', 
              color: 'var(--color-secondary-600)',
              margin: 0
            }}>
              A modern React component library with TailwindCSS
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeToggle />
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Alerts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Alert variant="success" title="Success!" dismissible style={{ fontSize: '0.875rem' }}>
              Your design system is working perfectly!
            </Alert>
            <Alert variant="info" title="Information" style={{ fontSize: '0.875rem' }}>
              This is a demo of the Design System UI components.
            </Alert>
          </div>

          {/* Button Showcase */}
          <Card style={{ overflow: 'hidden' }}>
            <CardHeader style={{ 
              borderBottom: '1px solid var(--color-secondary-200)', 
              backgroundColor: 'var(--color-secondary-50)',
              padding: '1.5rem'
            }}>
              <CardTitle style={{ fontSize: '1rem' }}>Buttons</CardTitle>
              <CardDescription style={{ fontSize: '0.875rem' }}>Different button variants and states</CardDescription>
            </CardHeader>
            <CardContent style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                  <Button variant="ghost" size="sm">Ghost</Button>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button loading size="sm">Loading...</Button>
                  <Button disabled size="sm">Disabled</Button>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <Button 
                    size="sm"
                    leftIcon={
                      <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    }
                  >
                    Add Item
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    rightIcon={
                      <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    }
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Example */}
          <Card style={{ overflow: 'hidden' }}>
            <CardHeader style={{ 
              borderBottom: '1px solid var(--color-secondary-200)', 
              backgroundColor: 'var(--color-secondary-50)',
              padding: '1.5rem'
            }}>
              <CardTitle style={{ fontSize: '1rem' }}>Contact Form</CardTitle>
              <CardDescription style={{ fontSize: '0.875rem' }}>Demonstration of form components</CardDescription>
            </CardHeader>
            <CardContent style={{ padding: '1.5rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  helperText="Enter your first and last name"
                  size="sm"
                  leftIcon={
                    <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  size="sm"
                  leftIcon={
                    <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  }
                />

                <Switch
                  checked={formData.notifications}
                  onChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
                  label="Email Notifications"
                  description="Receive updates and news via email"
                />

                <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.5rem' }}>
                  <Button type="submit" size="sm" loading={loading}>
                    {loading ? 'Submitting...' : 'Submit Form'}
                  </Button>
                  <Button type="button" variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Badge Showcase */}
          <Card style={{ overflow: 'hidden' }}>
            <CardHeader style={{ 
              borderBottom: '1px solid var(--color-secondary-200)', 
              backgroundColor: 'var(--color-secondary-50)',
              padding: '1.5rem'
            }}>
              <CardTitle style={{ fontSize: '1rem' }}>Badges</CardTitle>
              <CardDescription style={{ fontSize: '0.875rem' }}>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <Badge size="sm">Default</Badge>
                  <Badge variant="primary" size="sm">Primary</Badge>
                  <Badge variant="success" size="sm">Success</Badge>
                  <Badge variant="warning" size="sm">Warning</Badge>
                  <Badge variant="error" size="sm">Error</Badge>
                  <Badge variant="outline" size="sm">Outline</Badge>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modal Showcase */}
          <Card style={{ overflow: 'hidden' }}>
            <CardHeader style={{ 
              borderBottom: '1px solid var(--color-secondary-200)', 
              backgroundColor: 'var(--color-secondary-50)',
              padding: '1.5rem'
            }}>
              <CardTitle style={{ fontSize: '1rem' }}>Modal Component</CardTitle>
              <CardDescription style={{ fontSize: '0.875rem' }}>Interactive modal dialogs and overlays</CardDescription>
            </CardHeader>
            <CardContent style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Button size="sm" onClick={() => setShowModal(true)}>
                  Open Modal
                </Button>
                <Button variant="error" size="sm" onClick={() => setShowModal('confirm')}>
                  Delete Item
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card Showcase */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            <Card hoverable style={{ overflow: 'hidden' }}>
              <CardHeader style={{ 
                borderBottom: '1px solid var(--color-secondary-200)', 
                backgroundColor: 'var(--color-secondary-50)',
                padding: '1.5rem'
              }}>
                <CardTitle style={{ fontSize: '1rem' }}>Hoverable Card</CardTitle>
                <CardDescription style={{ fontSize: '0.875rem' }}>This card has hover effects</CardDescription>
              </CardHeader>
              <CardContent style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-600)' }}>
                  Hover over this card to see the shadow effect.
                </p>
              </CardContent>
            </Card>

            <Card variant="outline" hoverable style={{ overflow: 'hidden' }}>
              <CardHeader style={{ 
                borderBottom: '1px solid var(--color-secondary-200)', 
                backgroundColor: 'var(--color-secondary-50)',
                padding: '1.5rem'
              }}>
                <CardTitle style={{ fontSize: '1rem' }}>Outline Card</CardTitle>
                <CardDescription style={{ fontSize: '0.875rem' }}>Card with outline variant</CardDescription>
              </CardHeader>
              <CardContent style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-600)' }}>
                  This card uses the outline variant style.
                </p>
              </CardContent>
            </Card>

            <Card variant="filled" hoverable style={{ overflow: 'hidden' }}>
              <CardHeader style={{ 
                borderBottom: '1px solid var(--color-secondary-200)', 
                backgroundColor: 'var(--color-secondary-50)',
                padding: '1.5rem'
              }}>
                <CardTitle style={{ fontSize: '1rem' }}>Filled Card</CardTitle>
                <CardDescription style={{ fontSize: '0.875rem' }}>Card with filled background</CardDescription>
              </CardHeader>
              <CardContent style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-600)' }}>
                  This card has a filled background variant.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <p style={{ 
              fontSize: '0.875rem', 
              color: 'var(--color-secondary-600)',
              margin: 0
            }}>
              Built with ❤️ using React, TailwindCSS, and Storybook
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={showModal === true} 
        onClose={() => setShowModal(false)}
        title="Welcome Modal"
        description="This is a demonstration of the modal component"
        size="sm"
      >
        <ModalBody>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-600)' }}>
            This modal demonstrates the overlay functionality with proper accessibility features. 
            You can close it by clicking the X, pressing Escape, or clicking outside.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" size="sm" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button size="sm" onClick={() => setShowModal(false)}>
            Got it!
          </Button>
        </ModalFooter>
      </Modal>

      <Modal 
        isOpen={showModal === 'confirm'} 
        onClose={() => setShowModal(false)}
        title="Confirm Deletion"
        size="sm"
      >
        <ModalBody>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-600)' }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" size="sm" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="error" size="sm" onClick={() => setShowModal(false)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Demo />
    </ThemeProvider>
  )
}

// Export the App component for Fast Refresh compatibility
export default App

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />) 