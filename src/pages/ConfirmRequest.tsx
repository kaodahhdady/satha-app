import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'

export default function ConfirmRequest() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">تأكيد الطلب</h2>

      <div className="mt-4 space-y-3">
        <Card>
          <div className="flex justify-between">
            <div>
              <div className="text-sm text-secondary">نوع السطحة</div>
              <div className="font-semibold mt-1">سطحة عادية</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-secondary">الموقع</div>
              <div className="font-semibold mt-1">حي السليمانية</div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex justify-between">
            <div>
              <div className="text-sm text-secondary">السعر التقديري</div>
              <div className="font-semibold mt-1">150 ر.س</div>
            </div>
            <div>
              <div className="text-sm text-secondary">الوقت المتوقع للوصول</div>
              <div className="font-semibold mt-1">18 دقيقة</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <PrimaryButton onClick={() => nav('/searching')}>تأكيد الطلب</PrimaryButton>
      </div>
    </div>
  )
}
