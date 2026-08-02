import React from 'react'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'

export default function Wallet() {
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">المحفظة</h2>

      <Card className="mt-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-secondary">الرصيد الحالي</div>
            <div className="text-2xl font-bold mt-1">150 ر.س</div>
          </div>
          <PrimaryButton>سحب</PrimaryButton>
        </div>
      </Card>

      <div className="mt-4">
        <h3 className="text-base font-semibold">المعاملات</h3>
        <div className="mt-2 space-y-2">
          <Card>
            <div className="flex justify-between">
              <div>طلب سطحة</div>
              <div className="text-sm text-secondary">-150 ر.س</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
