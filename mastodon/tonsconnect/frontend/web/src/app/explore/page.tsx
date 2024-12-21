export default function Explore() {
  const categories = [
    { id: 1, name: 'DeFi', count: 1234 },
    { id: 2, name: 'NFTs', count: 856 },
    { id: 3, name: 'Gaming', count: 567 },
    { id: 4, name: 'DAOs', count: 432 },
    { id: 5, name: 'Development', count: 321 },
  ];

  const trends = [
    { id: 1, tag: '#TON', posts: 1234 },
    { id: 2, tag: '#DeFi', posts: 856 },
    { id: 3, tag: '#NFT', posts: 567 },
    { id: 4, tag: '#Blockchain', posts: 432 },
    { id: 5, tag: '#Crypto', posts: 321 },
  ];

  return (
    <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          <h1 className='text-2xl font-bold text-gray-900 mb-6'>Explore Categories</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {categories.map((category) => (
              <div key={category.id} className='bg-white p-6 rounded-lg shadow-sm'>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>{category.name}</h2>
                <p className='text-gray-500'>{category.count} posts</p>
                <button className='mt-4 text-blue-600 hover:text-blue-800 font-medium'>
                  View posts →
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Trending</h2>
          <div className='bg-white rounded-lg shadow-sm'>
            {trends.map((trend, index) => (
              <div
                key={trend.id}
                className={`p-4 ${
                  index !== trends.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <p className='font-medium text-gray-900'>{trend.tag}</p>
                <p className='text-sm text-gray-500'>{trend.posts} posts</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 