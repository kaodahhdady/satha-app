import React from 'react'
import Card from '../components/ui/Card'

export default function DriverRequests() {
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">الطلبات</h2>
      <div className="mt-4 space-y-3">
        <Card>
          <div className="flex justify-between">
            <div>
              <div className="font-semibold">سطحة عادية</div>
              <div className="text-sm text-secondary">الموقع: حي الملز</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-secondary">المسافة</div>
              <div className="font-semibold">3.1 كم</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
