import React from 'react';
import { Grid, Col } from '../../design-system/components/Layout/Grid';
import { Heading } from '../../design-system/components/Typography/Heading';
import { Button } from '../../design-system/components/Buttons/Button';

const categories = [
  { id: 1, name: 'Technology', count: 1234 },
  { id: 2, name: 'Cryptocurrency', count: 987 },
  { id: 3, name: 'Development', count: 756 },
  { id: 4, name: 'Design', count: 543 },
  { id: 5, name: 'Business', count: 432 },
  { id: 6, name: 'Marketing', count: 321 },
];

const trends = [
  { id: 1, name: '#TON', posts: 1234 },
  { id: 2, name: '#Blockchain', posts: 987 },
  { id: 3, name: '#Web3', posts: 756 },
  { id: 4, name: '#DeFi', posts: 543 },
  { id: 5, name: '#NFT', posts: 432 },
];

export const Explore = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Explore</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Explore items will go here */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <p className='text-gray-600'>No explore items yet.</p>
        </div>
      </div>
    </div>
  );
}; 