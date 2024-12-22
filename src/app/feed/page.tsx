import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    user: {
      name: 'Sarah Wilson',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    hasNewStory: true,
  },
  // Add more stories
];

const reels = [
  {
    id: 1,
    videoUrl: '/sample-reel.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=500',
    author: {
      name: 'Mike Johnson',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    views: '1.2M',
    likes: '234K',
  },
  // Add more reels
];

const posts = [
  {
    id: 1,
    type: 'image',
    content: 'Just deployed my first Next.js application! 🚀',
    mediaUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000',
    author: {
      name: 'John Doe',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      verified: true,
    },
    date: '3h ago',
    likes: 24892,
    comments: 1243,
    shares: 432,
    saved: false,
    location: 'San Francisco, CA',
  },
  // Add more posts
];

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stories Section */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {stories.map((story) => (
              <motion.div
                key={story.id}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-1"
              >
                <div className={`relative rounded-full p-1 ${story.hasNewStory ? 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600' : 'bg-gray-200'}`}>
                  <img
                    className="h-14 w-14 rounded-full border-2 border-white"
                    src={story.user.imageUrl}
                    alt={story.user.name}
                  />
                </div>
                <span className="text-xs">{story.user.name.split(' ')[0]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Post Section */}
      <div className="mx-auto max-w-2xl px-4 py-4">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src={stories[0].user.imageUrl}
              alt="Your profile"
            />
            <input
              type="text"
              placeholder="Share your thoughts..."
              className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4 flex justify-between border-t pt-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Photo</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Video</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <span>Reel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reels Section */}
      <div className="mx-auto max-w-2xl px-4 py-4">
        <h3 className="mb-4 text-lg font-semibold">Reels</h3>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              whileHover={{ scale: 1.02 }}
              className="relative min-w-[150px] rounded-lg bg-black"
            >
              <img
                src={reel.thumbnail}
                alt="Reel thumbnail"
                className="h-[270px] w-[150px] rounded-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                <div className="flex items-center space-x-2">
                  <img
                    className="h-6 w-6 rounded-full border border-white"
                    src={reel.author.imageUrl}
                    alt={reel.author.name}
                  />
                  <span className="text-sm">{reel.author.name}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span>{reel.views} views</span>
                  <span>{reel.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="mx-auto max-w-2xl px-4 py-4">
        <div className="space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-white p-4 shadow-sm"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt={post.author.name}
                  />
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-medium">{post.author.name}</span>
                      {post.author.verified && (
                        <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">{post.location}</div>
                  </div>
                </div>
                <button className="text-gray-500">•••</button>
              </div>

              {/* Post Media */}
              {post.type === 'image' && (
                <div className="relative mt-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={post.mediaUrl}
                    alt="Post content"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="text-gray-600 hover:text-red-500">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>

              {/* Post Stats */}
              <div className="mt-2 space-y-2">
                <div className="font-medium">{formatNumber(post.likes)} likes</div>
                <div>
                  <span className="font-medium">{post.author.name}</span>
                  <span className="ml-2">{post.content}</span>
                </div>
                <button className="text-sm text-gray-500">
                  View all {formatNumber(post.comments)} comments
                </button>
                <div className="text-xs text-gray-500">{post.date}</div>
              </div>

              {/* Comment Input */}
              <div className="mt-4 flex items-center border-t pt-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-transparent focus:outline-none"
                />
                <button className="text-blue-500 font-semibold">Post</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 