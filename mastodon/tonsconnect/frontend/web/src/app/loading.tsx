export default function Loading() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-24'>
      <div className='space-y-8 w-full max-w-2xl'>
        <div className='h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto' />
        <div className='h-4 w-64 bg-gray-200 rounded animate-pulse mx-auto' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[1, 2, 3].map((i) => (
            <div key={i} className='p-6 bg-white rounded-lg shadow-md'>
              <div className='h-6 w-32 bg-gray-200 rounded animate-pulse mb-4' />
              <div className='h-4 w-full bg-gray-200 rounded animate-pulse' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 