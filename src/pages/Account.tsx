import React from 'react'
import Card from '../components/ui/Card'
import { useNavigate } from 'react-router-dom'

export default function Account() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">حسابي</h2>

      <div className="mt-4 space-y-3">
        <Card>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">الاسم</div>
              <div className="text-sm text-secondary mt-1">Adam</div>
            </div>
            <button className="text-accent" onClick={() => nav('/account')}>تعديل</button>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col gap-2">
            <button className="text-right text-[#111111]">المركبات</button>
            <button className="text-right text-[#111111]">طرق الدفع</button>
            <button className="text-right text-[#111111]">الإشعارات</button>
            <button className="text-right text-[#111111]">الدعم والمساعدة</button>
            <button className="text-right text-red-500">تسجيل الخروج</button>
          </div>
        </Card>
      </div>
    </div>
  )
}
