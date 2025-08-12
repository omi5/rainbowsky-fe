import React from 'react';

interface LoadingSpinnerProps {
  screen?: boolean;
}

export default function LoadingSpinner({ screen }: LoadingSpinnerProps) {
  return (
    <div
      className={`flex items-center justify-center ${
        screen ? 'h-full' : 'h-full'
      }`}
    >
      <div className='h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent'></div>
    </div>
  );
}
