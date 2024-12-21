export default function Feed() {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Just deployed my first smart contract on TON! 🚀',
      timestamp: '2 hours ago',
      likes: 42,
      comments: 12,
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Working on a new DeFi project. Anyone interested in collaborating?',
      timestamp: '4 hours ago',
      likes: 28,
      comments: 8,
    },
    {
      id: 3,
      author: 'Alex Johnson',
      content: 'Great meetup yesterday! Thanks to everyone who joined. #TONCommunity',
      timestamp: '1 day ago',
      likes: 56,
      comments: 15,
    },
  ];

  return (
    <div className='max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-2xl font-bold text-gray-900 mb-8'>Your Feed</h1>
      <div className='space-y-8'>
        {posts.map((post) => (
          <div key={post.id} className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center mb-4'>
              <div className='h-10 w-10 rounded-full bg-gray-200' />
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>{post.author}</p>
                <p className='text-sm text-gray-500'>{post.timestamp}</p>
              </div>
            </div>
            <p className='text-gray-900 mb-4'>{post.content}</p>
            <div className='flex items-center space-x-4 text-sm text-gray-500'>
              <button className='flex items-center space-x-1'>
                <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                </svg>
                <span>{post.likes}</span>
              </button>
              <button className='flex items-center space-x-1'>
                <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                </svg>
                <span>{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 