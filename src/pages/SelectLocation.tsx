import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'

export default function SelectLocation() {
  const nav = useNavigate()
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">حدد موقع السيارة</h2>

      <div className="mt-4">
        <Card className="h-72 flex items-center justify-center">
          {/* Mock map area */}
          <div className="w-full h-full bg-[url('https://via.placeholder.com/420x300.png?text=Map')] bg-cover bg-center rounded-xl" />
        </Card>
      </div>

      <div className="mt-4">
        <div className="text-sm text-secondary">العنوان المحدد: حي السليمانية، الرياض</div>
        <div className="mt-4">
          <PrimaryButton onClick={() => nav('/confirm')}>التالي</PrimaryButton>
        </div>
      </div>
    </div>
  )
}
