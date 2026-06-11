// components/DevToolsOverlay.tsx
'use client';

import React from 'react';

interface DevToolsOverlayProps {
  isVisible: boolean;
}

export const DevToolsOverlay: React.FC<DevToolsOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-red-600 bg-opacity-95 flex items-center justify-center"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitTapHighlightColor: 'transparent',
        pointerEvents: 'all'
      }}
    >
      <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border-4 border-red-500 max-w-md mx-4">
        <div className="text-6xl mb-4">🚫</div>
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          Developer Tools Detected
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Please close the developer tools to continue with the quiz.
        </p>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Close dev tools and this message will disappear automatically.
        </div>
      </div>
    </div>
  );
};