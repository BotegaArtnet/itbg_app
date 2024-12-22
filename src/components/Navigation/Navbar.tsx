import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm"
    >
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link href="/" className="text-lg font-medium text-gray-900">
              ITBG
            </Link>
          </motion.div>
          <div className="ml-10 hidden space-x-8 md:flex">
            {navigation.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={link.href}
                  className={`relative text-sm ${
                    pathname === link.href
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full h-0.5 w-full bg-gray-900"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="rounded-md p-2 md:hidden"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
} 