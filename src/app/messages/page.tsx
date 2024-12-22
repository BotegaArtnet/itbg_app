import { motion } from 'framer-motion';

interface Message {
  id: number;
  content: string;
  timestamp: string;
  isOwn: boolean;
  status?: 'sent' | 'delivered' | 'read';
}

interface Chat {
  id: number;
  user: {
    name: string;
    username: string;
    avatar: string;
    isOnline: boolean;
    lastActive?: string;
  };
  lastMessage?: {
    content: string;
    timestamp: string;
    isRead: boolean;
  };
  messages: Message[];
}

const chats: Chat[] = [
  {
    id: 1,
    user: {
      name: 'Sarah Wilson',
      username: 'sarahw',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      isOnline: true,
    },
    lastMessage: {
      content: 'The new design looks amazing! 🎨',
      timestamp: '2m ago',
      isRead: false,
    },
    messages: [
      {
        id: 1,
        content: "Hey, how's the project coming along?",
        timestamp: '2:30 PM',
        isOwn: false,
      },
      {
        id: 2,
        content: 'Just finished the main components!',
        timestamp: '2:31 PM',
        isOwn: true,
        status: 'read',
      },
      {
        id: 3,
        content: 'The new design looks amazing! 🎨',
        timestamp: '2:32 PM',
        isOwn: false,
      },
    ],
  },
  {
    id: 2,
    user: {
      name: 'Mike Johnson',
      username: 'mikej',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      isOnline: false,
      lastActive: '1h ago',
    },
    lastMessage: {
      content: "Let me know when you're free to discuss",
      timestamp: '1h ago',
      isRead: true,
    },
    messages: [
      {
        id: 1,
        content: 'Hey, are you available for a quick call?',
        timestamp: '1:30 PM',
        isOwn: false,
      },
      {
        id: 2,
        content: "I'm in a meeting right now",
        timestamp: '1:35 PM',
        isOwn: true,
        status: 'read',
      },
      {
        id: 3,
        content: "Let me know when you're free to discuss",
        timestamp: '1:36 PM',
        isOwn: false,
      },
    ],
  },
];

export default function MessagesPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Chat List */}
      <div className="w-96 border-r bg-white">
        <div className="border-b p-4">
          <h1 className="text-xl font-semibold">Messages</h1>
          <div className="mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages"
                className="w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="divide-y overflow-y-auto">
          {chats.map((chat) => (
            <motion.div
              key={chat.id}
              whileHover={{ backgroundColor: '#f9fafb' }}
              className="flex cursor-pointer items-center gap-4 p-4"
            >
              <div className="relative">
                <img
                  src={chat.user.avatar}
                  alt={chat.user.name}
                  className="h-12 w-12 rounded-full"
                />
                {chat.user.isOnline && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
                )}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{chat.user.name}</h3>
                  <span className="text-xs text-gray-500">
                    {chat.lastMessage?.timestamp}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="truncate text-sm text-gray-600">
                    {chat.lastMessage?.content}
                  </p>
                  {!chat.lastMessage?.isRead && (
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b bg-white p-4">
          <div className="flex items-center gap-3">
            <img
              src={chats[0].user.avatar}
              alt={chats[0].user.name}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h2 className="font-medium">{chats[0].user.name}</h2>
              <p className="text-sm text-gray-500">
                {chats[0].user.isOnline ? 'Active now' : chats[0].user.lastActive}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {chats[0].messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-sm rounded-2xl px-4 py-2 ${
                    message.isOwn
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p>{message.content}</p>
                  <div className="mt-1 flex items-center justify-end gap-1">
                    <span className="text-xs opacity-75">{message.timestamp}</span>
                    {message.status === 'read' && (
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="border-t bg-white p-4">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </motion.button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 