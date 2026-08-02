import React from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'

export default function Emergency() {
  return (
    <div className="min-h-screen px-4 pt-8 pb-32">
      <h2 className="text-xl font-bold">خدمات الطوارئ</h2>

      <div className="mt-4 space-y-3">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">خدمة الطوارئ</div>
              <div className="text-sm text-secondary mt-1">الاتصال الفوري والدعم</div>
            </div>
            <PrimaryButton>اتصل الآن</PrimaryButton>
          </div>
        </Card>
        <Card>
          <div>
            <div className="font-semibold">خدمات الصيانة</div>
            <div className="text-sm text-secondary mt-1">تبديل بطارية، تغيير كفر، فحص</div>
          </div>
        </Card>
      </div>
    </div>
  )
}
