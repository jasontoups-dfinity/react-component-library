import type { ReactNode } from 'react';
import type { DeveloperPanelPosition } from '../../lib/DeveloperContext';

export interface DeveloperToolsProps {
  children: ReactNode;
  appName?: string;
  logo?: string | ReactNode;
  showLayoutControls?: boolean;
  showThemeToggle?: boolean;
  stores?: Record<string, unknown>;
  initialStores?: Record<string, unknown>;
  initialPosition?: DeveloperPanelPosition;
  initialEnabledTools?: {
    stateInspector?: boolean;
    storeInspector?: boolean;
    performanceMonitor?: boolean;
    networkMonitor?: boolean;
  };
  headerClassName?: string;
  panelClassName?: string;
}
