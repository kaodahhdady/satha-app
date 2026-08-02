import React from 'react'
import Card from '../components/ui/Card'

export default function DriverWallet() {
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">محفظة السائق</h2>
      <Card className="mt-4">
        <div>
          <div className="text-sm text-secondary">الرصيد الحالي</div>
          <div className="text-2xl font-bold mt-1">740 ر.س</div>
        </div>
      </Card>
    </div>
  )
}
