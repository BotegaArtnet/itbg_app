export default function Loading() {
  return (
    <div className='max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='h-8 w-48 bg-gray-200 rounded animate-pulse mb-8' />
      <div className='space-y-8'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center mb-4'>
              <div className='h-10 w-10 rounded-full bg-gray-200 animate-pulse' />
              <div className='ml-3'>
                <div className='h-4 w-24 bg-gray-200 rounded animate-pulse' />
                <div className='h-3 w-16 bg-gray-200 rounded animate-pulse mt-2' />
              </div>
            </div>
            <div className='space-y-3'>
              <div className='h-4 w-3/4 bg-gray-200 rounded animate-pulse' />
              <div className='h-4 w-1/2 bg-gray-200 rounded animate-pulse' />
            </div>
            <div className='flex items-center space-x-4 mt-4'>
              <div className='h-5 w-16 bg-gray-200 rounded animate-pulse' />
              <div className='h-5 w-16 bg-gray-200 rounded animate-pulse' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 