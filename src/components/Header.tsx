import React from 'react'
import { Bell } from 'lucide-react'

export default function Header({ name = 'Adam' }: { name?: string }) {
  return (
    <header className="px-4 pt-6 pb-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-sm text-secondary">مرحباً</div>
        <div className="font-semibold text-lg">{name}</div>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="notifications" className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center">
          <Bell size={18} className="text-[#777777]" />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-soft">
          <img alt="avatar" src="https://via.placeholder.com/80x80.png?text=ع" className="object-cover w-full h-full" />
        </div>
      </div>
    </header>
  )
}
