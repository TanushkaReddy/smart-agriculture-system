import React from 'react'

export default function Loader({ size = 40 }){
  return (
    <div className="flex items-center justify-center">
      <div
        style={{ width: size, height: size }}
        className="animate-spin rounded-full border-4 border-slate-700 border-t-emerald-400"
      />
    </div>
  )
}
