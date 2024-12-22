import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Build something amazing
            </motion.h1>
            <motion.p
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              A minimalist starting point for your next project. Clean, simple, and ready to be transformed into anything you can imagine.
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/projects"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  View Projects
                </motion.span>
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                <motion.span
                  whileHover={{ x: 4 }}
                  whileTap={{ x: 0 }}
                  className="inline-block"
                >
                  Learn more <span aria-hidden="true">→</span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 