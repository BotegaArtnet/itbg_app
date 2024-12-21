export default function Loading() {
  return (
    <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='bg-white rounded-lg shadow-sm'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {/* Conversation List */}
          <div className='border-r border-gray-200'>
            <div className='p-4 border-b border-gray-200'>
              <div className='h-6 w-24 bg-gray-200 rounded animate-pulse' />
            </div>
            <div className='divide-y divide-gray-200'>
              {[1, 2, 3].map((i) => (
                <div key={i} className='p-4 flex items-center space-x-3'>
                  <div className='flex-shrink-0'>
                    <div className='h-10 w-10 rounded-full bg-gray-200 animate-pulse' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <div className='flex items-center justify-between'>
                      <div className='h-4 w-24 bg-gray-200 rounded animate-pulse' />
                      <div className='h-3 w-16 bg-gray-200 rounded animate-pulse' />
                    </div>
                    <div className='mt-1'>
                      <div className='h-4 w-32 bg-gray-200 rounded animate-pulse' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className='col-span-2 flex flex-col h-[calc(100vh-12rem)]'>
            <div className='p-4 border-b border-gray-200'>
              <div className='flex items-center space-x-3'>
                <div className='h-10 w-10 rounded-full bg-gray-200 animate-pulse' />
                <div>
                  <div className='h-4 w-24 bg-gray-200 rounded animate-pulse' />
                  <div className='h-3 w-16 bg-gray-200 rounded animate-pulse mt-1' />
                </div>
              </div>
            </div>
            <div className='flex-1 p-4'>
              <div className='space-y-4'>
                <div className='flex justify-end'>
                  <div className='h-10 w-32 bg-gray-200 rounded animate-pulse' />
                </div>
                <div className='flex justify-start'>
                  <div className='h-10 w-40 bg-gray-200 rounded animate-pulse' />
                </div>
              </div>
            </div>
            <div className='p-4 border-t border-gray-200'>
              <div className='flex space-x-3'>
                <div className='flex-1 h-10 bg-gray-200 rounded animate-pulse' />
                <div className='h-10 w-20 bg-gray-200 rounded animate-pulse' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 