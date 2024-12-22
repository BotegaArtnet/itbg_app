import { motion } from 'framer-motion';

interface EarningsSummary {
  total: string;
  change: number;
  breakdown: {
    ads: number;
    subscriptions: number;
    donations: number;
    sponsorships: number;
  };
}

interface EngagementMetrics {
  views: string;
  likes: string;
  comments: string;
  shares: string;
  watchTime: string;
}

interface TopContent {
  id: string;
  title: string;
  type: 'video' | 'post' | 'reel';
  thumbnail: string;
  views: string;
  earnings: string;
}

const earningsSummary: EarningsSummary = {
  total: '$12,345.67',
  change: 23.5,
  breakdown: {
    ads: 45,
    subscriptions: 30,
    donations: 15,
    sponsorships: 10,
  },
};

const engagementMetrics: EngagementMetrics = {
  views: '1.2M',
  likes: '234K',
  comments: '45.6K',
  shares: '12.3K',
  watchTime: '45.6K hours',
};

const topContent: TopContent[] = [
  {
    id: '1',
    title: 'How to Build a Modern Web App',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=250',
    views: '234K',
    earnings: '$1,234.56',
  },
  {
    id: '2',
    title: 'Behind the Scenes: Studio Tour',
    type: 'reel',
    thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=250',
    views: '123K',
    earnings: '$567.89',
  },
  {
    id: '3',
    title: '10 Tips for Better Content',
    type: 'post',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=250',
    views: '89K',
    earnings: '$345.67',
  },
];

export default function CreatorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Creator Dashboard</h1>
          <p className="text-gray-600">Track your performance and earnings</p>
        </div>

        {/* Earnings Overview */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          {/* Total Earnings Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-900">Total Earnings</h2>
            <div className="mt-2 flex items-baseline">
              <p className="text-3xl font-bold text-gray-900">{earningsSummary.total}</p>
              <span className={`ml-2 text-sm ${earningsSummary.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {earningsSummary.change >= 0 ? '+' : ''}{earningsSummary.change}%
              </span>
            </div>

            {/* Earnings Breakdown */}
            <div className="mt-4">
              <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="flex h-full">
                  <div
                    className="bg-blue-500"
                    style={{ width: `${earningsSummary.breakdown.ads}%` }}
                  />
                  <div
                    className="bg-green-500"
                    style={{ width: `${earningsSummary.breakdown.subscriptions}%` }}
                  />
                  <div
                    className="bg-yellow-500"
                    style={{ width: `${earningsSummary.breakdown.donations}%` }}
                  />
                  <div
                    className="bg-purple-500"
                    style={{ width: `${earningsSummary.breakdown.sponsorships}%` }}
                  />
                </div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="ml-1 text-gray-600">Ads</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-1 text-gray-600">Subscriptions</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="ml-1 text-gray-600">Donations</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-purple-500" />
                  <span className="ml-1 text-gray-600">Sponsorships</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Engagement Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {Object.entries(engagementMetrics).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-medium text-gray-500">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </h3>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Top Performing Content */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Top Performing Content</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="relative aspect-video">
                  <img
                    src={content.thumbnail}
                    alt={content.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 rounded bg-black bg-opacity-75 px-2 py-1 text-xs text-white">
                    {content.type}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{content.title}</h3>
                  <div className="mt-2 flex justify-between text-sm">
                    <div className="text-gray-500">{content.views} views</div>
                    <div className="font-medium text-green-600">{content.earnings}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex justify-end gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Download Report
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            Withdraw Earnings
          </motion.button>
        </div>
      </div>
    </div>
  );
} 