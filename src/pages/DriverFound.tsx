import React from 'react'
import { Phone, MessageCircle, Star, Truck } from 'lucide-react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import { useNavigate } from 'react-router-dom'

export default function DriverFound() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">تم العثور على سائق</h2>

      <Card className="mt-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg bg-[#F5F5F6] flex items-center justify-center">
            <Truck size={28} className="text-[#111]" />
          </div>
          <div className="flex-1">
            <div className="font-semibold">سالم العتيبي</div>
            <div className="flex items-center gap-2 mt-1 text-sm text-secondary">
              <Star size={14} className="text-accent" />
              <span>4.9</span>
              <span>·</span>
              <span>سطحة هيدروليك</span>
            </div>
            <div className="text-sm text-secondary mt-1">الوصول خلال 12 دقيقة</div>
          </div>
          <div className="flex flex-col gap-2">
            <button aria-label="call" className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center"><Phone size={16} /></button>
            <button aria-label="chat" className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center"><MessageCircle size={16} /></button>
          </div>
        </div>
      </Card>

      <div className="mt-4">
        <PrimaryButton onClick={() => nav('/tracking')}>متابعة التتبع</PrimaryButton>
      </div>
    </div>
  )
}
