// Simple verification script to test all components are properly exported
import { 
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
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useTheme, 
  ThemeProvider,
  cn 
} from './src/index.js'

console.log('✅ All components imported successfully!')
console.log('Components available:', {
  Button: typeof Button,
  Input: typeof Input,
  Card: typeof Card,
  Badge: typeof Badge,
  Alert: typeof Alert,
  Switch: typeof Switch,
  Modal: typeof Modal,
  useTheme: typeof useTheme,
  ThemeProvider: typeof ThemeProvider,
  cn: typeof cn
}) 