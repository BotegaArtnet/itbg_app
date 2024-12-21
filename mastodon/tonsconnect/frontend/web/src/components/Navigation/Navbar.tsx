'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/' className='text-xl font-bold text-gray-900'>
                TonsConnect
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <Link href='/' className='text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>
                Home
              </Link>
              <Link href='/feed' className='text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>
                Feed
              </Link>
              <Link href='/explore' className='text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>
                Explore
              </Link>
              <Link href='/messages' className='text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>
                Messages
              </Link>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
              New Post
            </button>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <button
              onClick={() => { setIsOpen(!isOpen); }}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              ) : (
                <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='sm:hidden'>
          <div className='pt-2 pb-3 space-y-1'>
            <Link href='/' className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50'>
              Home
            </Link>
            <Link href='/feed' className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50'>
              Feed
            </Link>
            <Link href='/explore' className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50'>
              Explore
            </Link>
            <Link href='/messages' className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50'>
              Messages
            </Link>
            <div className='px-3 py-2'>
              <button className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
                New Post
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 