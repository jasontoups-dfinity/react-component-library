// Example usage of DeveloperTools component
// This shows how easy it is to use in another project

// IMPORTANT: Environment Variable Setup
// 1. Copy .env.example to .env in your project root
// 2. Set USE_DEVELOPER_TOOLS=true to enable developer tools
// 3. Developer tools only work in development mode for security

import React from 'react';
import { DeveloperTools } from './index';

// Example of a simple app using DeveloperTools
function ExampleApp() {
  return (
    <DeveloperTools appName="My Company App">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-gray-600">
          This app is using the DeveloperTools component from the React Component Library.
        </p>
        <p className="text-gray-600 mt-2">
          The developer tools are automatically available and can be toggled using the header
          controls.
        </p>
      </div>
    </DeveloperTools>
  );
}

// Example with custom configuration
function ExampleAppWithConfig() {
  const mockStore = {
    user: { name: 'John Doe', email: 'john@example.com' },
    settings: { theme: 'dark', language: 'en' },
  };

  return (
    <DeveloperTools
      appName="Advanced App"
      initialPosition="left"
      showLayoutControls={false}
      showThemeToggle={true}
      initialStores={{ appStore: mockStore }}
      initialEnabledTools={{
        stateInspector: true,
        storeInspector: true,
        performanceMonitor: false,
        networkMonitor: true,
      }}>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Advanced Example</h1>
        <p className="text-gray-600">
          This example shows custom configuration with store integration.
        </p>
      </div>
    </DeveloperTools>
  );
}

// Example showing environment variable behavior
function ExampleWithEnvironmentInfo() {
  return (
    <DeveloperTools appName="Environment Demo">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Environment Variable Demo</h1>
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
            <h2 className="font-semibold mb-2">Current Environment:</h2>
            <p className="text-sm">Mode: {import.meta.env.MODE}</p>
            <p className="text-sm">
              Developer Tools Enabled: {import.meta.env.USE_DEVELOPER_TOOLS || 'false'}
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md">
            <h2 className="font-semibold mb-2">To Enable Developer Tools:</h2>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>Set USE_DEVELOPER_TOOLS=true in your .env file</li>
              <li>Ensure you're running in development mode</li>
              <li>Restart your development server</li>
            </ol>
          </div>
        </div>
      </div>
    </DeveloperTools>
  );
}

export { ExampleApp, ExampleAppWithConfig, ExampleWithEnvironmentInfo };
