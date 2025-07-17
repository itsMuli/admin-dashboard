'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.main
      className="min-h-[80vh] w-full flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-secondary text-black dark:text-white transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black-700 dark:text-black-400">
        Welcome to Our Dashboard
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-6">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore, esse quod rem quidem iusto. Soluta reprehenderit placeat in excepturi velit illum rem assumenda? Rerum quas sunt nemo nostrum saepe.
       
      </p>

      <Link href="/dashboard">
        <div className="bg-gray-600 hover:bg-black-700 text-black px-6 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
          Users
        </div>
      </Link>
    </motion.main>
  )
}
