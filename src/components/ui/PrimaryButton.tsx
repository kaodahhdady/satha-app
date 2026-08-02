import React from 'react'

export default function PrimaryButton({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`bg-accent text-white rounded-xl px-4 py-3 font-semibold shadow-soft active:scale-[0.995] ${className}`}
    >
      {children}
    </button>
  )
}
