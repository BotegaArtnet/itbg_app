import React from 'react';
import { Grid, Col } from '../../design-system/components/Layout/Grid';
import { Heading } from '../../design-system/components/Typography/Heading';
import { Button } from '../../design-system/components/Buttons/Button';

export const Messages = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Messages</h1>
      <div className='bg-white rounded-lg shadow'>
        <div className='p-6'>
          <p className='text-gray-600'>No messages yet.</p>
        </div>
      </div>
    </div>
  );
}; 