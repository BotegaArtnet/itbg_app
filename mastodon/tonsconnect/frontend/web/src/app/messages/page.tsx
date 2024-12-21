export default function Messages() {
  const conversations = [
    {
      id: 1,
      user: 'John Doe',
      lastMessage: 'Hey, how are you?',
      timestamp: '2 min ago',
      unread: 2,
    },
    {
      id: 2,
      user: 'Jane Smith',
      lastMessage: 'The project looks great!',
      timestamp: '1 hour ago',
      unread: 0,
    },
    {
      id: 3,
      user: 'Alex Johnson',
      lastMessage: "Let me know when you're free",
      timestamp: '2 hours ago',
      unread: 1,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='bg-white rounded-lg shadow-sm'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {/* Conversation List */}
          <div className='border-r border-gray-200'>
            <div className='p-4 border-b border-gray-200'>
              <h1 className='text-xl font-bold text-gray-900'>Messages</h1>
            </div>
            <div className='divide-y divide-gray-200'>
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  className='w-full p-4 hover:bg-gray-50 flex items-center space-x-3'
                >
                  <div className='flex-shrink-0'>
                    <div className='h-10 w-10 rounded-full bg-gray-200' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium text-gray-900 truncate'>
                        {conversation.user}
                      </p>
                      <p className='text-xs text-gray-500'>{conversation.timestamp}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm text-gray-500 truncate'>
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <span className='inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-xs font-medium text-white'>
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className='col-span-2 flex flex-col h-[calc(100vh-12rem)]'>
            <div className='p-4 border-b border-gray-200'>
              <div className='flex items-center space-x-3'>
                <div className='h-10 w-10 rounded-full bg-gray-200' />
                <div>
                  <p className='text-sm font-medium text-gray-900'>John Doe</p>
                  <p className='text-xs text-gray-500'>Online</p>
                </div>
              </div>
            </div>
            <div className='flex-1 p-4 overflow-y-auto'>
              <div className='space-y-4'>
                <div className='flex justify-end'>
                  <div className='bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs'>
                    Hey, how are you?
                  </div>
                </div>
                <div className='flex justify-start'>
                  <div className='bg-gray-100 rounded-lg px-4 py-2 max-w-xs'>
                    I'm good, thanks! How about you?
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 border-t border-gray-200'>
              <div className='flex space-x-3'>
                <input
                  type='text'
                  placeholder='Type a message...'
                  className='flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 