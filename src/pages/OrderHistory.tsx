import React from 'react'
import Card from '../components/ui/Card'

export default function OrderHistory() {
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">سجل الطلبات</h2>

      <div className="mt-4 space-y-3">
        <Card>
          <div className="flex justify-between">
            <div>
              <div className="font-semibold">سطحة عادية</div>
              <div className="text-sm text-secondary">12 أبريل · 150 ر.س</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-secondary">الحالة</div>
              <div className="font-semibold">مكتمل</div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between">
            <div>
              <div className="font-semibold">تبديل البطارية</div>
              <div className="text-sm text-secondary">5 مارس · 70 ر.س</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-secondary">الحالة</div>
              <div className="font-semibold">مكتمل</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
