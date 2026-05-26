import React from 'react'
import { HiOutlineCheckCircle } from 'react-icons/hi2'

export default function ResultCard({ title, result, details }){
  return (
    <div className="mt-4 rounded-[32px] border border-slate-800 bg-slate-950/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900/90 text-emerald-300 shadow-lg border border-emerald-500/20">
          <HiOutlineCheckCircle className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-300 font-semibold">{title}</p>
          <p className="mt-3 text-4xl font-black text-white">{result}</p>
          {details && <p className="mt-2 text-sm text-slate-400">{details}</p>}
        </div>
      </div>
    </div>
  )
}
