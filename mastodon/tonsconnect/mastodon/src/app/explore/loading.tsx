import React from 'react';
import { Grid, Col } from '../../design-system/components/Layout/Grid';
import { Heading } from '../../design-system/components/Typography/Heading';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
    </div>
  );
}; 