import React from 'react'

export default function PredictionCard({ title, children, ...props }){
  return (
    <div className="premium-card" {...props}>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-300">Fill in the details for instant predictions.</p>
        </div>
        <span className="badge-success">AI Powered</span>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  )
}
