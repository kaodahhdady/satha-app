import React from 'react'

export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-card p-4 shadow-soft ${className}`}>
      {children}
    </div>
  )
}
