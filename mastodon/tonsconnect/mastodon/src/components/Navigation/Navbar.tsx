import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/' className='text-xl font-bold text-gray-800'>
                Logo
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <Link href='/' className='text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300'>
                Home
              </Link>
              <Link href='/feed' className='text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300'>
                Feed
              </Link>
              <Link href='/explore' className='text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300'>
                Explore
              </Link>
              <Link href='/messages' className='text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300'>
                Messages
              </Link>
              <Link href='/grid-demo' className='text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300'>
                Grid Demo
              </Link>
            </div>
          </div>
          <div className='sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={handleToggle}
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='sm:hidden'>
          <div className='pt-2 pb-3 space-y-1'>
            <Link href='/' className='block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>
              Home
            </Link>
            <Link href='/feed' className='block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>
              Feed
            </Link>
            <Link href='/explore' className='block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>
              Explore
            </Link>
            <Link href='/messages' className='block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>
              Messages
            </Link>
            <Link href='/grid-demo' className='block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'>
              Grid Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}; 