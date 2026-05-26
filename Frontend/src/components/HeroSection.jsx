import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HeroSection({
  title = 'Smart Farming',
  highlight = 'Made Simple',
  subtitle = 'Real-time ML predictions for crop selection, nutrient optimization, and yield forecasting. Grow smarter and harvest more.',
  primaryButton = { label: 'Get Started', to: '/crop' },
  secondaryButton = { label: 'Back to Dashboard', to: '/' },
  tertiaryButton = null,
  heroLabel = 'Live Analytics',
  heroTitle = 'Connected farm insights',
  heroDescription = 'A real-time view of crop, soil and yield intelligence delivered in a polished dashboard.',
  heroImage = null,
  heroAlt = 'Farm analytics illustration',
  heroStats = [
    { label: 'Model Accuracy', value: '92%', color: 'from-blue-400 to-cyan-400' },
    { label: 'Farm Records', value: '50K+', color: 'from-emerald-400 to-green-400' },
    { label: 'Tools Available', value: '3 Tools', color: 'from-amber-400 to-orange-400' }
  ]
}){
  const renderButton = (button, buttonClass) => {
    if (!button) return null
    const content = (
      <>
        {button.label}
        <span className="h-4 w-4 transition group-hover:translate-x-1 inline-flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </>
    )

    return button.to?.startsWith('#')
      ? <a href={button.to} className={buttonClass}>{content}</a>
      : <Link to={button.to} className={buttonClass}>{content}</Link>
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mb-12 rounded-[40px] border border-white/15 bg-gradient-to-br from-blue-900/60 via-slate-900/80 to-slate-950 p-10 shadow-premium overflow-hidden relative"
    >
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"></div>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center relative z-10">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs font-semibold uppercase tracking-[0.3em]">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            AI Agriculture Platform
          </span>
          
          <div>
            <h1 className="section-title text-6xl font-black leading-tight text-white">
              {title} <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">{highlight}</span>
            </h1>
            <p className="mt-4 section-subtitle text-lg text-slate-300">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {renderButton(primaryButton, 'btn-primary inline-flex items-center gap-2 group')}
            {renderButton(secondaryButton, 'btn-secondary inline-flex items-center gap-2 group')}
            {tertiaryButton && renderButton(tertiaryButton, 'btn-secondary inline-flex items-center gap-2 group')}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 pt-4">
            {heroStats.map(stat => (
              <div key={stat.label}>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-slate-950/70 shadow-2xl h-72"
          >
            {heroImage && <img src={heroImage} alt={heroAlt} className="h-full w-full object-cover opacity-95" />}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{heroLabel}</span>
              <h3 className="mt-4 text-3xl font-bold text-white">{heroTitle}</h3>
              <p className="mt-3 text-sm text-slate-300">{heroDescription}</p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="rounded-[24px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-slate-950/40 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-blue-300 font-semibold">Live</p>
              <p className="mt-3 text-xl font-bold text-white">All Online</p>
              <p className="mt-1 text-xs text-slate-400">3 Models Ready</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="rounded-[24px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-slate-950/40 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300 font-semibold">Stable</p>
              <p className="mt-3 text-xl font-bold text-white">99.8%</p>
              <p className="mt-1 text-xs text-slate-400">Uptime</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
