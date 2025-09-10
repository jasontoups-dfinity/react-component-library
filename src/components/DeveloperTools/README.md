# DeveloperTools

A single, easy-to-use component that provides comprehensive developer tools for React applications. This component combines the functionality of `DeveloperProvider` and `DeveloperWrapper` into a single import for maximum portability and ease of use.

## Features

- **Single Import**: Import everything you need with one component
- **Responsive Layout Controls**: Test your application at different screen sizes
- **Theme Toggle**: Switch between light and dark themes
- **State Inspector**: View component state in real-time
- **Store Inspector**: Monitor global state stores
- **Performance Monitor**: Track component render times
- **Network Monitor**: Monitor API requests and responses
- **Environment Variable Control**: Enable/disable based on environment
- **Resizable Panels**: Adjust panel size with persistent sizing
- **Multiple Panel Positions**: Right, left, or bottom positioning

## Installation

This component is part of the React Component Library. To use it in other projects, install the library:

```bash
npm install @your-company/react-component-library
```

## Usage

### Basic Usage

```tsx
import { DeveloperTools } from '@your-company/react-component-library';

function App() {
  return (
    <DeveloperTools appName="My App">
      <YourAppContent />
    </DeveloperTools>
  );
}
```

### With Store Integration

```tsx
import { DeveloperTools } from '@your-company/react-component-library';
import { store } from './store'; // Your Redux store
import { useZustandStore } from './zustandStore'; // Your Zustand store

function App() {
  const zustandStore = useZustandStore();

  return (
    <DeveloperTools appName="My App" initialStores={{ redux: store, zustand: zustandStore }}>
      <YourAppContent />
    </DeveloperTools>
  );
}
```

### With Custom Configuration

```tsx
import { DeveloperTools } from '@your-company/react-component-library';
import customLogo from './assets/logo.svg';

function App() {
  return (
    <DeveloperTools
      appName="My App"
      logo={customLogo}
      initialPosition="left"
      showLayoutControls={true}
      showThemeToggle={true}
      initialEnabledTools={{
        stateInspector: true,
        storeInspector: true,
        performanceMonitor: false,
        networkMonitor: false,
      }}>
      <YourAppContent />
    </DeveloperTools>
  );
}
```

## Environment Variable Control

### Important: Development Only

Developer tools are only available in development mode and will never appear in staging or production environments, regardless of the environment variable setting.

### Setup

1. Copy `.env.example` to `.env`
2. Set `USE_DEVELOPER_TOOLS=true` to enable developer tools
3. Developer tools are disabled by default for security

### Per-Developer Configuration

Each developer can control their own experience:

```bash
# Enable developer tools (development only)
USE_DEVELOPER_TOOLS=true npm run dev

# Disable developer tools (default behavior)
USE_DEVELOPER_TOOLS=false npm run dev
# or simply
npm run dev
```

### Environment Behavior

- **Development**: Respects `USE_DEVELOPER_TOOLS` environment variable
- **Staging/Production**: Developer tools never shown, regardless of environment variable
- **Default**: Developer tools are disabled unless explicitly enabled

### Security Features

- **Double Protection**: Requires both development mode AND explicit enablement
- **Safe by Default**: No accidental exposure in non-development environments
- **Per-Developer Control**: Each team member can choose their own experience

## Props

| Prop                  | Type                          | Default      | Description                |
| --------------------- | ----------------------------- | ------------ | -------------------------- |
| `children`            | ReactNode                     | -            | Child components           |
| `appName`             | string                        | 'React App'  | Application name           |
| `logo`                | string \| ReactNode           | DFINITY logo | App logo                   |
| `showLayoutControls`  | boolean                       | true         | Show layout width controls |
| `showThemeToggle`     | boolean                       | true         | Show theme toggle          |
| `stores`              | Record<string, unknown>       | `{}`         | Stores to monitor          |
| `initialStores`       | Record<string, unknown>       | -            | Initial stores for context |
| `initialPosition`     | 'right' \| 'bottom' \| 'left' | 'right'      | Panel position             |
| `initialEnabledTools` | Object                        | All true     | Which tools to enable      |
| `headerClassName`     | string                        | -            | Additional header classes  |
| `panelClassName`      | string                        | -            | Additional panel classes   |

## Advanced Usage

If you need more control over the individual components, you can still import them separately:

```tsx
import {
  DeveloperProvider,
  DeveloperWrapper,
  useDeveloper,
} from '@your-company/react-component-library';

// Use the individual components for advanced customization
```

## Migration from Separate Components

If you're currently using `DeveloperProvider` and `DeveloperWrapper` separately, you can easily migrate:

### Before

```tsx
import { DeveloperProvider } from '../../lib/DeveloperContext';
import { DeveloperWrapper } from '../components/DeveloperWrapper';

function App() {
  return (
    <DeveloperProvider initialStores={stores} initialPosition="right">
      <DeveloperWrapper appName="My App" stores={stores}>
        {children}
      </DeveloperWrapper>
    </DeveloperProvider>
  );
}
```

### After

```tsx
import { DeveloperTools } from '@your-company/react-component-library';

function App() {
  return (
    <DeveloperTools appName="My App" initialStores={stores} initialPosition="right">
      {children}
    </DeveloperTools>
  );
}
```

## Notes

- The component automatically handles the nesting of `DeveloperProvider` and `DeveloperWrapper`
- All functionality from the individual components is preserved
- The component is fully compatible with existing projects using the separate components
- Panel sizes are automatically persisted between sessions
