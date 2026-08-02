import React from 'react'
import { ChevronLeft, Car } from 'lucide-react'

type Props = {
  title: string
  subtitle: string
  white?: boolean
  icon?: React.ReactNode
}

export default function ServiceCard({ title, subtitle, white = true, icon }: Props) {
  return (
    <div className={`flex items-center justify-between gap-3 p-4 ${white ? 'bg-white' : 'bg-[#111111] text-white'} rounded-card shadow-subtle`}>
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${white ? 'bg-[#F7F7F8]' : 'bg-white/10'}`}>
          {icon ? icon : <Car size={20} className={`${white ? 'text-accent' : 'text-accent'}`} />}
        </div>
        <div>
          <div className="text-base font-semibold">{title}</div>
          <div className="text-sm text-secondary mt-1">{subtitle}</div>
        </div>
      </div>

      <button className={`w-10 h-10 rounded-full flex items-center justify-center ${white ? 'bg-[#F7F7F8]' : 'bg-white/10'}`}>
        <ChevronLeft size={20} className={white ? 'text-accent' : 'text-accent'} />
      </button>
    </div>
  )
}
