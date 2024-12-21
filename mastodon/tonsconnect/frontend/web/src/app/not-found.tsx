import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>404 - Page Not Found</h1>
        <p className='text-lg text-gray-600 mb-8'>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href='/'
          className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block'
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 