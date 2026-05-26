import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineHome,
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineXMark
} from 'react-icons/hi2'

const LinkItem = ({ to, icon: Icon, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
        isActive
          ? 'bg-gradient-to-r from-cyan-500/25 to-sky-500/15 text-cyan-300 shadow-lg'
          : 'text-slate-300 hover:bg-white/10 hover:text-white'
      }`
    }
  >
    <Icon className="h-5 w-5" />
    {label}
  </NavLink>
)

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 p-6 premium-card border-r rounded-none transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } xl:translate-x-0`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">
              Navigation
            </p>

            <h2 className="mt-3 text-xl font-bold text-white">
              Farm AI
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200 transition hover:bg-slate-800"
          >
            <HiOutlineXMark className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-2">
          <LinkItem
            to="/"
            icon={HiOutlineHome}
            label="Dashboard"
            onClick={onClose}
          />

          <LinkItem
            to="/crop"
            icon={HiOutlineSparkles}
            label="Crop Prediction"
            onClick={onClose}
          />

          <LinkItem
            to="/fertilizer"
            icon={HiOutlineBeaker}
            label="Fertilizer"
            onClick={onClose}
          />

          <LinkItem
            to="/yield"
            icon={HiOutlineChartBar}
            label="Yield Forecast"
            onClick={onClose}
          />
        </nav>

        <div className="mt-8 rounded-[24px] border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 p-5">
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-semibold mb-3">
            Status
          </div>

          <div className="rounded-2xl bg-emerald-500/20 border border-emerald-500/50 p-3 text-sm text-emerald-300 font-medium">
            ✓ All systems operational
          </div>

          <div className="mt-3 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <span>3 models online</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
              <span>99.8% uptime</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs uppercase tracking-[0.3em] text-slate-600">
          © 2026 Smart Agriculture
        </div>
      </aside>
    </>
  )
}
