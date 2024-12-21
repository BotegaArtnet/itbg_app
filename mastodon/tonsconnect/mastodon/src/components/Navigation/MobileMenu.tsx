'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 overflow-hidden z-50' onClose={onClose}>
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='transform transition ease-in-out duration-500'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration-500'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
              <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                <div className='px-4 sm:px-6'>
                  <div className='flex items-start justify-between'>
                    <Dialog.Title className='text-lg font-medium text-gray-900'>
                      Menu
                    </Dialog.Title>
                    <div className='ml-3 flex h-7 items-center'>
                      <button
                        type='button'
                        className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        onClick={onClose}
                      >
                        <span className='sr-only'>Close panel</span>
                        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                  <nav className='flex flex-col space-y-4'>
                    <Link href='/' className='text-gray-600 hover:text-blue-600'>
                      Home
                    </Link>
                    <Link href='/feed' className='text-gray-600 hover:text-blue-600'>
                      Feed
                    </Link>
                    <Link href='/explore' className='text-gray-600 hover:text-blue-600'>
                      Explore
                    </Link>
                    <Link href='/messages' className='text-gray-600 hover:text-blue-600'>
                      Messages
                    </Link>
                    <Link href='/grid-demo' className='text-gray-600 hover:text-blue-600'>
                      Grid Demo
                    </Link>
                  </nav>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}; 