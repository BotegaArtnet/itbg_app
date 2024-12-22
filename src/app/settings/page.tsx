import { motion } from 'framer-motion';

interface Setting {
  id: string;
  label: string;
  description: string;
  type?: 'toggle' | 'select';
  options?: string[];
}

interface SettingsSection {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  settings: Setting[];
}

const settingsSections: SettingsSection[] = [
  {
    id: 'account',
    title: 'Account Settings',
    description: 'Manage your account information and preferences',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    settings: [
      {
        id: 'profile',
        label: 'Edit Profile',
        description: 'Update your profile information',
      },
      {
        id: 'password',
        label: 'Change Password',
        description: 'Update your password and security settings',
      },
      {
        id: 'email',
        label: 'Email Settings',
        description: 'Manage your email preferences and notifications',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    description: 'Control your privacy and security settings',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    settings: [
      {
        id: 'visibility',
        label: 'Account Privacy',
        description: 'Choose who can see your content',
        type: 'select',
        options: ['Public', 'Private', 'Friends Only'],
      },
      {
        id: 'activity',
        label: 'Activity Status',
        description: "Show when you're active on the platform",
        type: 'toggle',
      },
      {
        id: 'blocking',
        label: 'Blocked Accounts',
        description: 'Manage your blocked accounts',
      },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Customize your notification preferences',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    settings: [
      {
        id: 'push',
        label: 'Push Notifications',
        description: 'Manage your mobile push notifications',
        type: 'toggle',
      },
      {
        id: 'email_notif',
        label: 'Email Notifications',
        description: 'Choose which emails you want to receive',
        type: 'toggle',
      },
      {
        id: 'mentions',
        label: 'Mentions & Tags',
        description: 'Get notified when someone mentions you',
        type: 'toggle',
      },
    ],
  },
  {
    id: 'content',
    title: 'Content Preferences',
    description: 'Customize your feed and content settings',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    settings: [
      {
        id: 'language',
        label: 'Language',
        description: 'Choose your preferred language',
        type: 'select',
        options: ['English', 'Spanish', 'French', 'German'],
      },
      {
        id: 'autoplay',
        label: 'Autoplay Videos',
        description: 'Automatically play videos while scrolling',
        type: 'toggle',
      },
      {
        id: 'quality',
        label: 'Video Quality',
        description: 'Set your preferred video quality',
        type: 'select',
        options: ['Auto', '1080p', '720p', '480p'],
      },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-gray-600">Manage your account settings and preferences.</p>
        </div>

        <div className="space-y-6">
          {settingsSections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-lg bg-white shadow"
            >
              <div className="border-b border-gray-200 bg-gray-50 p-4 sm:px-6">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">{section.title}</h2>
                    <p className="text-sm text-gray-500">{section.description}</p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {section.settings.map((setting) => (
                  <motion.div
                    key={setting.id}
                    whileHover={{ backgroundColor: '#f9fafb' }}
                    className="flex items-center justify-between p-4 sm:px-6"
                  >
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{setting.label}</h3>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>

                    <div className="ml-6">
                      {setting.type === 'toggle' ? (
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                            <span className="opacity-0 duration-100 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" aria-hidden="true">
                              <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </span>
                        </motion.button>
                      ) : setting.type === 'select' ? (
                        <select className="rounded-md border-gray-300 py-1 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                          {setting.options?.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Edit
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Save Changes Button */}
        <div className="mt-8 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Save Changes
          </motion.button>
        </div>
      </div>
    </div>
  );
} 