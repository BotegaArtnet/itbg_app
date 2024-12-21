import React from 'react';
import { Grid, Col } from '../../design-system/components/Layout/Grid';
import { Heading } from '../../design-system/components/Typography/Heading';
import { PostCard } from '../../design-system/components/Cards/PostCard';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export const Feed = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Your Feed</h1>
      <div className='grid grid-cols-1 gap-6'>
        {/* Feed items will go here */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <p className='text-gray-600'>No feed items yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Feed; 