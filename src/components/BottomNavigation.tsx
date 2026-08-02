import React from 'react'
import { Home, CreditCard, Truck, User } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function BottomNavigation() {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const items = [
    { label: 'سطحاتي', to: '/history', icon: Truck },
    { label: 'المحفظة', to: '/wallet', icon: CreditCard },
    { label: 'الرئيسية', to: '/home', icon: Home },
    { label: 'حسابي', to: '/account', icon: User }
  ]
  return (
    <nav className="fixed left-0 right-0 bottom-4 px-4 flex justify-center" role="navigation">
      <div className="bg-white/95 rounded-2xl py-3 px-4 flex items-center justify-between gap-3 w-full max-w-xl shadow-soft" style={{ transform: 'translateY(-6px)' }}>
        {items.map((it) => {
          const Icon = it.icon
          const active = pathname === it.to
          return (
            <button key={it.to} onClick={() => nav(it.to)} className="flex-1 flex flex-col items-center gap-1">
              <div className={`${active ? 'bg-[#111111] text-accent' : 'text-[#777777]'} w-11 h-11 rounded-xl flex items-center justify-center`}>
                <Icon size={18} />
              </div>
              <div className={`text-xs ${active ? 'text-[#111111] font-semibold' : 'text-[#777777]'}`}>{it.label}</div>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
