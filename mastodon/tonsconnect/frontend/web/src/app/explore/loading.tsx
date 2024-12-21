export default function Loading() {
  return (
    <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          <div className='h-8 w-48 bg-gray-200 rounded animate-pulse mb-6' />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className='bg-white p-6 rounded-lg shadow-sm'>
                <div className='h-6 w-32 bg-gray-200 rounded animate-pulse mb-2' />
                <div className='h-4 w-24 bg-gray-200 rounded animate-pulse' />
                <div className='h-4 w-20 bg-gray-200 rounded animate-pulse mt-4' />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='h-8 w-32 bg-gray-200 rounded animate-pulse mb-6' />
          <div className='bg-white rounded-lg shadow-sm'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className='p-4 border-b border-gray-200'>
                <div className='h-5 w-24 bg-gray-200 rounded animate-pulse mb-2' />
                <div className='h-4 w-16 bg-gray-200 rounded animate-pulse' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 