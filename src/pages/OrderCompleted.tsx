import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'

export default function OrderCompleted() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-20 pb-32">
      <Card className="text-center py-8">
        <div className="text-xl font-bold">تم إكمال الطلب</div>
        <div className="text-sm text-secondary mt-2">شكراً لاستخدامك سطحة — نأمل أن خدمتك كانت ممتازة</div>
        <div className="mt-6">
          <PrimaryButton onClick={() => nav('/history')}>عرض الطلبات</PrimaryButton>
        </div>
      </Card>
    </div>
  )
}
