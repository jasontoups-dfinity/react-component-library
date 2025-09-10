import React, { useRef } from 'react';
import type { DeveloperWrapperProps } from './types';
import { useDeveloper } from '../../lib/DeveloperContext';
import DeveloperHeader from './DeveloperHeader';
import DeveloperPanel from './DeveloperPanel';
import StateInspector from './StateInspector';
import StoreInspector from './StoreInspector';
import PerformanceMonitor from './PerformanceMonitor';
import NetworkMonitor from './NetworkMonitor';
import dfinityLogo from '../../assets/dfinity-logo.svg';

const DeveloperWrapper: React.FC<DeveloperWrapperProps> = ({
  children,
  appName = 'React App',
  logo = dfinityLogo,
  showLayoutControls = true,
  showThemeToggle = true,
  // Keep these props for API compatibility, but don't use them
  // They're now handled by the DeveloperProvider
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enabledTools,
  stores = {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultPosition,
  headerClassName,
  panelClassName,
}) => {
  const {
    isEnabled,
    activePanel,
    isPanelOpen,
    position,
    setActivePanel,
    // Keep these for type compatibility, but don't use them
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setPosition,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setEnabledTools,
  } = useDeveloper();

  // Render the appropriate panel content based on the active panel
  const renderPanelContent = () => {
    switch (activePanel) {
      case 'state':
        return <StateInspector />;
      case 'store':
        return <StoreInspector stores={stores} />;
      case 'performance':
        return <PerformanceMonitor />;
      case 'network':
        return <NetworkMonitor />;
      default:
        return null;
    }
  };

  // Create a ref for the header element
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <div className="developer-wrapper flex flex-col ">
      <DeveloperHeader
        appName={appName}
        logo={logo}
        showLayoutControls={showLayoutControls}
        showThemeToggle={showThemeToggle}
        className={headerClassName}
        ref={headerRef}
      />

      {children}
      {isEnabled && isPanelOpen && activePanel && (
        <DeveloperPanel
          isOpen={isPanelOpen}
          onClose={() => setActivePanel(null)}
          position={position}
          className={panelClassName}
          headerRef={headerRef}>
          {renderPanelContent()}
        </DeveloperPanel>
      )}
    </div>
  );
};

export default DeveloperWrapper;
