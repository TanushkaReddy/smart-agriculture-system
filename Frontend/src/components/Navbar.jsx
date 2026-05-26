import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlineBars3 } from 'react-icons/hi2'

export default function Navbar({ onMenuClick }){
  return (
    <header className="w-full sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-lg">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-4 px-5 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-4">
          <button type="button" onClick={onMenuClick} className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-slate-200 shadow-sm transition hover:bg-slate-800 hover:border-slate-600">
            <HiOutlineBars3 className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-cyan-400 via-sky-400 to-emerald-400 text-lg font-black text-slate-950 shadow-lg"
            >
              SA
            </motion.div>
            <div>
              <Link to="/" className="text-2xl font-extrabold text-white">Smart Agriculture</Link>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-slate-400">Make your predictions now</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 xl:justify-end">
          <nav className="hidden items-center gap-6 text-sm text-slate-300 xl:flex">
            <Link to="/" className="transition hover:text-cyan-400">Dashboard</Link>
            <Link to="/crop" className="transition hover:text-cyan-400">Crop</Link>
            <Link to="/fertilizer" className="transition hover:text-cyan-400">Fertilizer</Link>
            <Link to="/yield" className="transition hover:text-cyan-400">Yield</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
