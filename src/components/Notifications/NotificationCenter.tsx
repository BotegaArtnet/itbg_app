import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Notification {
  id: number;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'message';
  content: string;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  isRead: boolean;
  link: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'like',
    content: 'liked your post',
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: '2m ago',
    isRead: false,
    link: '/post/123',
  },
  {
    id: 2,
    type: 'follow',
    content: 'started following you',
    user: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: '5m ago',
    isRead: false,
    link: '/profile/mikej',
  },
  {
    id: 3,
    type: 'comment',
    content: 'commented on your post: "Amazing work! 🔥"',
    user: {
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: '10m ago',
    isRead: true,
    link: '/post/123#comment-456',
  },
];

const notificationIcons = {
  like: (
    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  comment: (
    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  follow: (
    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4.354a4 4 0 110 5.292V4.354zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197L15 21z" />
    </svg>
  ),
  mention: (
    <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13h-1v5l3.5 2.1.75-1.23-2.25-1.35V7z" />
    </svg>
  ),
  message: (
    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  ),
};

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="relative">
      {/* Notification Bell */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative rounded-full p-2 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
            {unreadCount}
          </span>
        )}
      </motion.button>

      {/* Notification Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black bg-opacity-25"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div className="divide-y divide-gray-100">
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-lg font-semibold">Notifications</h2>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    Mark all as read
                  </button>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <motion.a
                      key={notification.id}
                      href={notification.link}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                      className={`flex items-center gap-4 p-4 ${
                        !notification.isRead ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={notification.user.avatar}
                          alt=""
                          className="h-10 w-10 rounded-full"
                        />
                        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white">
                          {notificationIcons[notification.type]}
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate text-sm">
                          <span className="font-medium text-gray-900">
                            {notification.user.name}
                          </span>{' '}
                          <span className="text-gray-600">
                            {notification.content}
                          </span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {notification.timestamp}
                        </p>
                      </div>
                      {!notification.isRead && (
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                      )}
                    </motion.a>
                  ))}
                </div>

                <div className="p-4">
                  <button className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
                    View all notifications
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 