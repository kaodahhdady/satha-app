import React, { useState } from 'react'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useNavigate } from 'react-router-dom'

export default function DriverHome() {
  const [online, setOnline] = useState(true)
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">مرحبا، سائق</h2>
      </div>

      <Card className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-sm text-secondary">الحالة</div>
          <div className="font-semibold mt-1">{online ? 'متصل' : 'غير متصل'}</div>
        </div>
        <PrimaryButton onClick={() => setOnline(!online)}>{online ? 'تحويل الى غير متصل' : 'الاتصال'}</PrimaryButton>
      </Card>

      <div className="mt-4">
        <h3 className="font-semibold">طلبات قريبة منك</h3>
        <div className="mt-3 space-y-3">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">سطحة هيدروليك</div>
                <div className="text-sm text-secondary">2.4 كم</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => nav('/driver/requests')} className="py-2 px-3 rounded-xl border">رفض</button>
                <PrimaryButton onClick={() => nav('/driver/requests')}>قبول</PrimaryButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
