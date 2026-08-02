import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'
import { Truck, Wrench } from 'lucide-react'

export default function SelectTow() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">طلب سطحة</h2>
      </div>

      <div className="mt-6 space-y-3">
        <Card>
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-xl bg-[#F5F5F6] flex items-center justify-center">
              <Truck size={36} className="text-[#111111]" />
            </div>
            <div>
              <div className="font-semibold">سطحة عادية</div>
              <div className="text-sm text-secondary mt-1">خيار اقتصادي وسريع</div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-xl bg-[#F5F5F6] flex items-center justify-center">
              <Wrench size={36} className="text-[#111111]" />
            </div>
            <div>
              <div className="font-semibold">سطحة هيدروليك</div>
              <div className="text-sm text-secondary mt-1">لحالات السيارات الثقيلة أو النقل الآمن</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <PrimaryButton onClick={() => nav('/select-location')}>التالي</PrimaryButton>
      </div>
    </div>
  )
}
