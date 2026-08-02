import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'

export default function Home() {
  const nav = useNavigate()
  return (
    <div className="px-4 pb-32">
      <Header name="Adam" />
      <Hero />

      <section className="mt-5">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-base font-semibold">خدماتنا</h3>
          <div className="text-sm text-secondary">استكشف</div>
        </div>

        <div className="mt-3 flex gap-3">
          <button className="flex-1 rounded-xl py-3 bg-[#111111] text-white flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center" />
            خدمات الطوارئ
          </button>
          <button className="flex-1 rounded-xl py-3 bg-white border border-[#EFEFEF] text-[#111111]">خدمات الصيانة</button>
        </div>

        <div className="mt-4 space-y-3">
          <ServiceCard title="تبديل البطارية" subtitle="نصلك بسرعة لأي مكان" />
          <ServiceCard title="تغيير الكفر" subtitle="خدمة سريعة وآمنة" />
          <ServiceCard title="فحص السيارة" subtitle="فحص شامل في مكانك" />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">طلب سطحة</div>
                <div className="text-sm text-secondary mt-1">سطحة عادية أو هيدروليك</div>
              </div>
              <button onClick={() => nav('/select-tow')} className="bg-[#111111] text-accent w-14 h-14 rounded-xl flex items-center justify-center">اذهب</button>
            </div>
          </Card>

          <ServiceCard title="سطحات قريبة منك" subtitle="اعرض السطحات المتوفرة الآن" white={true} />
        </div>

        <div className="mt-5">
          <Card className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">خدمة العملاء 24/7</div>
              <div className="text-sm text-secondary mt-1">نحن هنا لمساعدتك في أي وقت</div>
            </div>
            <PrimaryButton>اتصل بنا</PrimaryButton>
          </Card>
        </div>
      </section>
    </div>
  )
}
