import React from 'react'
import { Truck } from 'lucide-react'

export default function Hero() {
  return (
    <div className="px-4">
      <div className="rounded-card overflow-hidden relative bg-white shadow-soft">
        <div className="p-4">
          <h2 className="text-2xl font-bold leading-tight">نحن هنا لـ<span className="text-accent">مساعدتك</span></h2>
          <p className="text-sm text-secondary mt-1">خدمات سريعة وموثوقة على مدار الساعة</p>
        </div>

        {/* Hero illustration: refined tow-truck + road */}
        <div className="relative">
          <div className="h-44 flex items-center justify-between px-5 bg-white">
            <div>
              <h3 className="text-xl font-semibold">إصلاح سيارتك</h3>
              <p className="text-lg font-bold">عند باب منزلك</p>
              <div className="w-8 h-1 bg-accent rounded-full mt-3" />
            </div>

            <div className="w-36 h-28 rounded-xl bg-[#F7F7F8] flex items-center justify-center shadow-subtle">
              {/* Inline SVG tow-truck illustration (flat, premium) */}
              <svg width="132" height="84" viewBox="0 0 132 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="28" width="128" height="36" rx="6" fill="#FFFFFF"/>
                <g transform="translate(8,4)">
                  <path d="M6 48h88v6H6z" fill="#F0F0F1"/>
                  <rect x="10" y="18" width="48" height="26" rx="4" fill="#111111"/>
                  <rect x="62" y="28" width="48" height="12" rx="3" fill="#EDEDED"/>
                  <circle cx="22" cy="54" r="8" fill="#111111"/>
                  <circle cx="84" cy="54" r="8" fill="#111111"/>
                  <circle cx="22" cy="54" r="4" fill="#FFFFFF"/>
                  <circle cx="84" cy="54" r="4" fill="#FFFFFF"/>
                  <path d="M118 22c0 0-12-2-20 6-6 6-8 14-8 14" stroke="#FF8500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 py-3">
          <div className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
          <div className="w-8 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
        </div>
      </div>
    </div>
  )
}
