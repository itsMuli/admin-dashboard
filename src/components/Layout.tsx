'use client'

import { ReactNode } from 'react'
import Sidebar from './Sidebar'

type Props = {
  children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary text-black dark:text-white transition-all duration-300">
      <Sidebar />
      <main className="sm:ml-64 p-4">{children}</main>
    </div>
  )
}
