import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Searching() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-20 pb-32 flex flex-col items-center">
      <div className="rounded-card p-6 bg-white shadow-soft w-full max-w-md text-center">
        <div className="text-lg font-semibold">جاري البحث عن أقرب سطحة...</div>
        <div className="text-sm text-secondary mt-2">نبحث عن السطحات المتاحة حولك</div>
        <div className="mt-6">
          <div className="w-36 h-36 rounded-full bg-white shadow-subtle flex items-center justify-center pulse-soft">
            {/* spinner */}
            <svg width="48" height="48" viewBox="0 0 24 24" className="animate-spin text-accent"><circle cx="12" cy="12" r="10" stroke="#FF8500" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
          </div>
        </div>
        <div className="mt-4 flex justify-between gap-3">
          <button onClick={() => nav('/driver-found')} className="flex-1 py-3 rounded-xl bg-[#111111] text-accent">محاكاة العثور على سائق</button>
          <button onClick={() => nav('/home')} className="flex-1 py-3 rounded-xl bg-white border">إلغاء</button>
        </div>
      </div>
    </div>
  )
}
