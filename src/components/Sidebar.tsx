'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const linkClasses = (path: string) =>
    `block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
      pathname === path ? 'bg-gray-300 dark:bg-gray-700 font-semibold' : ''
    }`

  return (
    <>
      <div className="sm:hidden flex items-center justify-between px-4 py-4 bg-gray-100 dark:bg-gray-800 shadow sticky top-0 z-50">
        <Link href="/" className="font-bold text-lg">AdminDashboard</
        Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black dark:text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside
  className={`bg-gray-100 dark:bg-gray-800 sm:fixed sm:top-0 sm:left-0 sm:h-full sm:w-64 transition-all duration-300 
    ${isOpen ? 'w-44 absolute top-16 right-0 rounded-lg shadow-lg z-40' : 'hidden'} sm:block`}
>

        <nav className="p-4 space-y-2">
          <Link href="/dashboard" className={linkClasses('/dashboard')}>
            Dashboard
          </Link>
          <Link href="/dashboard/settings" className={linkClasses('/dashboard/settings')}>
            Settings
          </Link>
        </nav>
      </aside>
    </>
  )
}
