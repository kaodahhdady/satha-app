import React from 'react'
import Card from '../components/ui/Card'

export default function DriverAccount() {
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">حساب السائق</h2>
      <div className="mt-4 space-y-3">
        <Card>
          <div className="font-semibold">المركبة</div>
          <div className="text-sm text-secondary mt-1">نيسان 2020 - لوحة 1234</div>
        </Card>
        <Card>
          <div>طرق الدفع</div>
        </Card>
      </div>
    </div>
  )
}
