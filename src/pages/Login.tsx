import React, { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [phone, setPhone] = useState('')
  const nav = useNavigate()
  return (
    <div className="min-h-screen flex flex-col px-4 pt-10">
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">أهلاً بك في سطحة</h1>
        <p className="text-sm text-secondary mt-2">خلنا نساعدك في أسرع وقت</p>
      </div>
      <div className="mt-8">
        <label className="text-sm text-secondary">رقم الجوال</label>
        <input
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 w-full p-3 rounded-xl border border-[#ECECEC] bg-white"
          placeholder="05xxxxxxxx"
        />
      </div>
      <div className="mt-6">
        <PrimaryButton onClick={() => nav('/home')}>متابعة</PrimaryButton>
      </div>
      <div className="mt-4 text-center">
        <button className="text-sm text-accent" onClick={() => nav('/driver/home')}>الدخول كسائق</button>
      </div>
    </div>
  )
}
