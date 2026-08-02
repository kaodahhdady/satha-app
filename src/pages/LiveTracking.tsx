import React from 'react'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useNavigate } from 'react-router-dom'

export default function LiveTracking() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-4 pb-32">
      <div className="rounded-card overflow-hidden bg-white shadow-soft">
        {/* stylized map illustration (SVG) */}
        <div className="h-64 flex items-center justify-center bg-white">
          <svg width="100%" height="100%" viewBox="0 0 420 250" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="100%" height="100%" fill="#F7F7F8" rx="16"/>
            <g transform="translate(20,20)">
              <path d="M0 180 C80 140 160 220 240 180 C320 140 400 200 480 160" stroke="#E9E9EA" strokeWidth="10" fill="none" strokeLinecap="round"/>
              <circle cx="60" cy="140" r="10" fill="#111"/>
              <circle cx="330" cy="100" r="10" fill="#FF8500"/>
              <rect x="120" y="100" width="46" height="24" rx="6" fill="#111"/>
            </g>
          </svg>
        </div>
      </div>

      <Card className="mt-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">سالم العتيبي</div>
            <div className="text-sm text-secondary">الوصول خلال 10 دقائق</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-secondary">نوع السطحة</div>
            <div className="font-semibold">هيدروليك</div>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="flex-1 py-3 rounded-xl border">محادثة</button>
          <PrimaryButton onClick={() => nav('/completed')}>تأكيد إتمام</PrimaryButton>
        </div>
      </Card>
    </div>
  )
}
