import { motion } from 'framer-motion';

const categories = [
  'All',
  'Live',
  'Gaming',
  'Music',
  'Design',
  'Programming',
  'Cooking',
  'Travel',
  'Education',
];

const videos = [
  {
    id: 1,
    title: 'Building a Modern Web App with Next.js 13',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    channel: {
      name: 'Tech Masters',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      verified: true,
    },
    views: '1.2M',
    posted: '2 days ago',
    duration: '15:24',
    live: false,
  },
  {
    id: 2,
    title: 'Live Coding: Building a Real-time Chat App',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=1000',
    channel: {
      name: 'Code with Sarah',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      verified: true,
    },
    views: '15K',
    posted: 'Live now',
    duration: 'LIVE',
    live: true,
  },
  // Add more videos
];

const recommendedChannels = [
  {
    id: 1,
    name: 'Design Daily',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subscribers: '2.3M',
    verified: true,
  },
  // Add more channels
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Categories */}
      <div className="sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex space-x-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Video Grid */}
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                {/* Duration Badge */}
                <div className={`absolute bottom-2 right-2 rounded px-2 py-1 text-xs font-medium ${
                  video.live ? 'bg-red-600 text-white' : 'bg-black/75 text-white'
                }`}>
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-4 flex space-x-3">
                <img
                  src={video.channel.avatar}
                  alt={video.channel.name}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="mt-1 flex items-center space-x-1 text-sm text-gray-500">
                    <span>{video.channel.name}</span>
                    {video.channel.verified && (
                      <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {video.views} views • {video.posted}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommended Channels */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900">Recommended Channels</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedChannels.map((channel) => (
              <motion.div
                key={channel.id}
                whileHover={{ y: -4 }}
                className="flex items-center space-x-4 rounded-lg border bg-white p-4 shadow-sm"
              >
                <img
                  src={channel.avatar}
                  alt={channel.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <h3 className="font-medium text-gray-900">{channel.name}</h3>
                    {channel.verified && (
                      <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{channel.subscribers} subscribers</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto rounded-full bg-red-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-700"
                >
                  Subscribe
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 