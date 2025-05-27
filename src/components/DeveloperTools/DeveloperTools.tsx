import React from 'react';
import { DeveloperProvider } from '../../lib/DeveloperContext';
import DeveloperWrapper from '../DeveloperWrapper/DeveloperWrapper';
import type { DeveloperToolsProps } from './types';

export const DeveloperTools: React.FC<DeveloperToolsProps> = ({
  children,
  appName = 'React App',
  logo,
  showLayoutControls = true,
  showThemeToggle = true,
  stores = {},
  initialStores,
  initialPosition = 'right',
  initialEnabledTools = {
    stateInspector: true,
    storeInspector: true,
    performanceMonitor: true,
    networkMonitor: true,
  },
  headerClassName,
  panelClassName,
  ...rest
}) => {
  // Check if we're in development mode
  const isDevelopment = import.meta.env.MODE === 'development';

  // Check if developer tools are explicitly enabled
  const isDevToolsEnabled = import.meta.env.USE_DEVELOPER_TOOLS === 'true';

  // Only show developer tools if both conditions are met:
  // 1. We're in development mode
  // 2. USE_DEVELOPER_TOOLS is explicitly set to "true"
  const shouldShowDevTools = isDevelopment && isDevToolsEnabled;

  // If developer tools should not be shown, just render children
  if (!shouldShowDevTools) {
    return <>{children}</>;
  }

  // Use initialStores if provided, otherwise fall back to stores
  const contextStores = initialStores || stores;

  return (
    <DeveloperProvider
      initialStores={contextStores}
      initialPosition={initialPosition}
      initialEnabledTools={initialEnabledTools}>
      <DeveloperWrapper
        appName={appName}
        logo={logo}
        showLayoutControls={showLayoutControls}
        showThemeToggle={showThemeToggle}
        stores={stores}
        headerClassName={headerClassName}
        panelClassName={panelClassName}
        {...rest}>
        {children}
      </DeveloperWrapper>
    </DeveloperProvider>
  );
};

export default DeveloperTools;
