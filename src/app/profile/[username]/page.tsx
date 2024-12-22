import { motion } from 'framer-motion';
import { useState } from 'react';

const userProfile = {
  username: 'johndoe',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Digital creator & tech enthusiast | Building the future of social media',
  verified: true,
  stats: {
    posts: 248,
    followers: '24.5K',
    following: 420,
  },
  highlights: [
    { id: 1, title: 'Tech', cover: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=250' },
    { id: 2, title: 'Travel', cover: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=250' },
    { id: 3, title: 'Work', cover: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=250' },
  ],
};

const tabs = [
  { id: 'posts', label: 'Posts', icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ) },
  { id: 'reels', label: 'Reels', icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ) },
  { id: 'saved', label: 'Saved', icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  ) },
];

const posts = [
  {
    id: 1,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=500',
    likes: '2.4K',
    comments: 42,
  },
  // Add more posts
];

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Profile Header */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex items-start gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-32 w-32 flex-shrink-0"
          >
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="h-full w-full rounded-full object-cover"
            />
            {userProfile.verified && (
              <div className="absolute -right-2 bottom-0">
                <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            )}
          </motion.div>

          <div className="flex-1">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">{userProfile.username}</h1>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
                >
                  Follow
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200"
                >
                  Message
                </motion.button>
              </div>
            </div>

            <div className="mt-4 flex gap-8">
              <div>
                <span className="font-semibold">{userProfile.stats.posts}</span>
                <span className="ml-1 text-gray-600">posts</span>
              </div>
              <div>
                <span className="font-semibold">{userProfile.stats.followers}</span>
                <span className="ml-1 text-gray-600">followers</span>
              </div>
              <div>
                <span className="font-semibold">{userProfile.stats.following}</span>
                <span className="ml-1 text-gray-600">following</span>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="font-semibold">{userProfile.name}</h2>
              <p className="mt-1 text-gray-600">{userProfile.bio}</p>
            </div>
          </div>
        </div>

        {/* Story Highlights */}
        <div className="mt-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {userProfile.highlights.map((highlight) => (
              <motion.div
                key={highlight.id}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
                  <div className="h-full w-full rounded-full border-2 border-white">
                    <img
                      src={highlight.cover}
                      alt={highlight.title}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs font-medium">{highlight.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mt-8 border-t">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ color: '#2563eb' }}
                className="flex items-center gap-2 px-8 py-4 text-sm font-medium text-gray-500 hover:text-blue-600"
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Grid Content */}
          <div className="mt-4 grid grid-cols-3 gap-1">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ opacity: 0.8 }}
                className="group relative aspect-square cursor-pointer"
              >
                <img
                  src={post.thumbnail}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 