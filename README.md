# Design System UI

A modern, accessible React component library built with TailwindCSS, featuring dark mode support and comprehensive Storybook documentation.

## ✨ Features

- 🎨 **Modern Design**: Clean, consistent, and beautiful components
- 🌙 **Dark Mode**: Built-in light/dark theme support
- ♿ **Accessible**: ARIA-compliant components following WCAG guidelines
- 📱 **Responsive**: Mobile-first design approach
- 🎭 **Customizable**: Easy theming and styling customization
- 📚 **Well Documented**: Comprehensive Storybook documentation
- 🚀 **Developer Friendly**: TypeScript support and intuitive APIs
- ⚡ **Performance**: Optimized bundle size and runtime performance

## 🎯 Components

### Form Elements
- **Button** - Multiple variants, sizes, loading states, and icon support
- **Input** - Text inputs with validation, icons, and helper text
- **Textarea** - Multi-line text inputs with resize options
- **Checkbox** - Styled checkboxes with labels and descriptions
- **Radio** - Radio button groups with context support
- **Switch** - Toggle switches with smooth animations

### Layout & Structure
- **Card** - Flexible content containers with headers, footers
- **Modal** - Accessible overlay dialogs with customizable sizes
- **Tabs** - Tabbed navigation with horizontal and vertical orientations
- **Accordion** - Collapsible content sections with single/multiple modes

### Data Display & Feedback
- **Badge** - Status indicators and labels
- **Alert** - Contextual feedback messages
- **Skeleton** - Loading placeholders with multiple variants and animations
- **Toast** - Notification messages with auto-dismiss and variants

### Navigation
- **Navbar** - Responsive navigation bars with mobile menu support
- **Sidebar** - Collapsible side navigation with grouping and icons
- **Breadcrumbs** - Navigation breadcrumbs with custom separators
- **Pagination** - Advanced page navigation with ellipsis and customization

## 🚀 Installation

```bash
npm install design-systemui
# or
yarn add design-systemui
```

## 📖 Usage

### Basic Setup

```jsx
import { 
  ThemeProvider, 
  Button, 
  Input, 
  Card,
  Skeleton,
  Toast,
  Navbar,
  Sidebar,
  Breadcrumbs,
  Pagination
} from 'design-systemui'
import 'design-systemui/dist/styles.css'

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="p-8">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <Input 
            label="Your Name" 
            placeholder="Enter your name" 
            className="mb-4" 
          />
          <Button variant="primary">Get Started</Button>
        </Card>
      </div>
    </ThemeProvider>
  )
}
```

### Theme Support

```jsx
import { useTheme } from 'design-systemui'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <Button 
      onClick={toggleTheme}
      variant="outline"
    >
      {theme === 'light' ? '🌙' : '☀️'} Toggle Theme
    </Button>
  )
}
```

### Button Examples

```jsx
import { Button } from 'design-systemui'

// Different variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// With icons
<Button 
  leftIcon={<PlusIcon />}
  variant="primary"
>
  Add Item
</Button>

// Loading state
<Button loading>Processing...</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Input Examples

```jsx
import { Input } from 'design-systemui'

// Basic input
<Input 
  label="Email" 
  type="email"
  placeholder="your@email.com"
/>

// With validation
<Input 
  label="Password"
  type="password"
  required
  error="Password is required"
/>

// With icons
<Input 
  label="Search"
  placeholder="Search..."
  leftIcon={<SearchIcon />}
/>
```

### Skeleton Examples

```jsx
import { Skeleton } from 'design-systemui'

// Basic skeleton
<Skeleton className="w-32 h-4" />

// Different variants
<Skeleton variant="avatar" />
<Skeleton variant="button" className="w-24" />
<Skeleton variant="card" className="w-full h-32" />

// Text loading placeholder
<div className="space-y-2">
  <Skeleton className="w-full h-4" />
  <Skeleton className="w-3/4 h-4" />
  <Skeleton className="w-1/2 h-4" />
</div>

// Custom animations
<Skeleton animation="wave" className="w-full h-4" />
<Skeleton animation="none" className="w-full h-4" />
```

### Toast Examples

```jsx
import { Toast } from 'design-systemui'

// Basic toast
<Toast variant="success" title="Success!">
  Your changes have been saved.
</Toast>

// Different variants
<Toast variant="error" title="Error">
  Something went wrong. Please try again.
</Toast>

<Toast variant="warning" title="Warning">
  Please review your input.
</Toast>

<Toast variant="info" title="Info">
  New updates are available.
</Toast>

// Auto-dismiss toast
<Toast 
  variant="success" 
  duration={3000}
  onClose={() => console.log('Toast closed')}
>
  This will disappear in 3 seconds
</Toast>

// Persistent toast
<Toast variant="info" duration={0}>
  This toast stays until manually closed
</Toast>
```

### Navbar Examples

```jsx
import { Navbar } from 'design-systemui'

// Basic navbar
<Navbar>
  <Navbar.Brand>Your App</Navbar.Brand>
  <Navbar.Content justify="end">
    <Navbar.Item active>Home</Navbar.Item>
    <Navbar.Item>About</Navbar.Item>
    <Navbar.Item>Contact</Navbar.Item>
  </Navbar.Content>
</Navbar>

// Navbar with logo and actions
<Navbar variant="primary" shadow>
  <Navbar.Brand href="/">
    <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
    Company
  </Navbar.Brand>
  <Navbar.Content justify="center">
    <Navbar.Item>Products</Navbar.Item>
    <Navbar.Item>Solutions</Navbar.Item>
    <Navbar.Item active>Pricing</Navbar.Item>
  </Navbar.Content>
  <Navbar.Content justify="end">
    <button className="btn btn-outline">Sign in</button>
    <button className="btn btn-primary">Sign up</button>
  </Navbar.Content>
</Navbar>

// Responsive navbar with mobile menu
function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <Navbar>
        <Navbar.Brand>Brand</Navbar.Brand>
        <div className="hidden md:flex">
          <Navbar.Content>
            <Navbar.Item active>Home</Navbar.Item>
            <Navbar.Item>About</Navbar.Item>
          </Navbar.Content>
        </div>
        <div className="md:hidden">
          <Navbar.Toggle 
            isOpen={isOpen} 
            onClick={() => setIsOpen(!isOpen)} 
          />
        </div>
      </Navbar>
      <Navbar.Menu isOpen={isOpen}>
        <Navbar.Item active>Home</Navbar.Item>
        <Navbar.Item>About</Navbar.Item>
      </Navbar.Menu>
    </>
  )
}
```

### Sidebar Examples

```jsx
import { Sidebar } from 'design-systemui'

// Basic sidebar
<Sidebar>
  <Sidebar.Header>
    <h2>Dashboard</h2>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group title="Main">
      <Sidebar.Item icon={<HomeIcon />} active>
        Dashboard
      </Sidebar.Item>
      <Sidebar.Item icon={<UserIcon />}>
        Profile
      </Sidebar.Item>
    </Sidebar.Group>
    <Sidebar.Group title="Admin">
      <Sidebar.Item icon={<SettingsIcon />}>
        Settings
      </Sidebar.Item>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar>

// Collapsible sidebar
<Sidebar collapsible defaultCollapsed={false}>
  <Sidebar.Header>
    <div className="flex items-center justify-between">
      <h2>Dashboard</h2>
      <Sidebar.Toggle />
    </div>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Item icon={<HomeIcon />} active>
      Home
    </Sidebar.Item>
    <Sidebar.Item icon={<UserIcon />}>
      Users
    </Sidebar.Item>
  </Sidebar.Content>
  <Sidebar.Footer>
    <Sidebar.Item icon={<LogoutIcon />}>
      Logout
    </Sidebar.Item>
  </Sidebar.Footer>
</Sidebar>
```

### Breadcrumbs Examples

```jsx
import { Breadcrumbs } from 'design-systemui'

// Basic breadcrumbs
<Breadcrumbs>
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
  <Breadcrumbs.Item active>Product Details</Breadcrumbs.Item>
</Breadcrumbs>

// Custom separator
<Breadcrumbs separator="→">
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/docs">Documentation</Breadcrumbs.Item>
  <Breadcrumbs.Item active>Getting Started</Breadcrumbs.Item>
</Breadcrumbs>

// With icons
<Breadcrumbs>
  <Breadcrumbs.Item href="/">
    <HomeIcon className="w-4 h-4 mr-1" />
    Home
  </Breadcrumbs.Item>
  <Breadcrumbs.Item href="/projects">
    <FolderIcon className="w-4 h-4 mr-1" />
    Projects
  </Breadcrumbs.Item>
  <Breadcrumbs.Item active>Project Details</Breadcrumbs.Item>
</Breadcrumbs>
```

### Pagination Examples

```jsx
import { Pagination } from 'design-systemui'

// Basic pagination
function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  )
}

// Custom pagination options
<Pagination
  currentPage={currentPage}
  totalPages={50}
  onPageChange={setCurrentPage}
  showFirstLast={false}
  siblingCount={2}
  variant="outline"
/>

// Different sizes
<Pagination
  size="sm"
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
/>

// Without first/last buttons
<Pagination
  currentPage={currentPage}
  totalPages={15}
  onPageChange={setCurrentPage}
  showFirstLast={false}
  showPrevNext={true}
/>
```

## 🎨 Customization

### Custom Theme Colors

```jsx
// tailwind.config.js
module.exports = {
  // ... other config
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom primary colors
          500: '#your-color',
          600: '#your-darker-color',
          // ...
        }
      }
    }
  }
}
```

### CSS Custom Properties

```css
:root {
  --ds-primary-500: #3b82f6;
  --ds-primary-600: #2563eb;
  /* ... other custom properties */
}
```

## 📚 Documentation

Visit our [Storybook documentation](https://yourusername.github.io/design-systemui) to:

- 📖 Browse all components and their variants
- 🎮 Interactive playground with live code examples
- 📋 Copy-paste ready code snippets
- 🎨 Design tokens and theming guide
- ♿ Accessibility guidelines

## 🛠️ Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/design-systemui.git
cd design-systemui

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build
```

### Project Structure

```
design-systemUI/
├── src/
│   ├── components/          # React components
│   │   ├── Button/
│   │   ├── Input/
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   └── index.js            # Main entry point
├── stories/                # Storybook stories
├── .storybook/            # Storybook configuration
└── docs/                  # Documentation
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- 🐛 Bug reports
- 💡 Feature requests  
- 🔧 Pull requests
- 📝 Documentation improvements

## 📄 License

MIT © [Akhib](https://github.com/yourusername)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Documented with [Storybook](https://storybook.js.org/)
- Bundled with [Vite](https://vitejs.dev/)

---

<div align="center">
  
**[📚 Documentation](https://yourusername.github.io/design-systemui)** • 
**[🐛 Report Bug](https://github.com/yourusername/design-systemui/issues)** • 
**[💡 Request Feature](https://github.com/yourusername/design-systemui/issues)**

Made with ❤️ for the React community

</div> 