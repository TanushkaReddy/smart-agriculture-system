import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineSparkles, HiOutlineBeaker, HiOutlineChartBar, HiOutlineArrowRight } from 'react-icons/hi2'

export default function StartWizard(){
  return (
    <main className="p-6 xl:p-8 max-w-[1800px] mx-auto">
      <section className="premium-card mb-10 overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Welcome aboard
            </span>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">What would you like to do today?</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Choose the prediction path that matches your goal. Use our crop recommendation, fertilizer planner, or yield forecast to make smarter decisions for your farm.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Link to="/crop" className="rounded-[24px] border border-blue-500/30 bg-blue-500/10 p-5 text-left transition hover:bg-blue-500/20">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 text-white shadow-lg">
                  <HiOutlineSparkles className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-white">Crop Recommendation</h2>
                <p className="mt-2 text-sm text-slate-400">Find the best crop for your soil, climate and season.</p>
              </Link>
              <Link to="/fertilizer" className="rounded-[24px] border border-emerald-500/30 bg-emerald-500/10 p-5 text-left transition hover:bg-emerald-500/20">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 text-white shadow-lg">
                  <HiOutlineBeaker className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-white">Fertilizer Planner</h2>
                <p className="mt-2 text-sm text-slate-400">Optimize nutrient dosing for healthy, efficient growth.</p>
              </Link>
              <Link to="/yield" className="rounded-[24px] border border-amber-500/30 bg-amber-500/10 p-5 text-left transition hover:bg-amber-500/20">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-lg">
                  <HiOutlineChartBar className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-white">Yield Forecast</h2>
                <p className="mt-2 text-sm text-slate-400">Predict harvest outcomes so you can plan ahead.</p>
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 text-slate-200 shadow-soft-dark">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">Quick guide</div>
            <h2 className="mt-6 text-2xl font-bold text-white">Need help choosing?</h2>
            <p className="mt-3 text-slate-400">Start with the tool that best matches your next decision. Each page includes a simple form to capture your field details.</p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[24px] border border-slate-800/60 bg-slate-900/70 p-5">
                <div className="font-semibold text-white">Crop Recommendation</div>
                <p className="mt-2 text-sm text-slate-400">Use this when you know your location, soil, and weather. It suggests high-potential crops for your season.</p>
              </div>
              <div className="rounded-[24px] border border-slate-800/60 bg-slate-900/70 p-5">
                <div className="font-semibold text-white">Fertilizer Planner</div>
                <p className="mt-2 text-sm text-slate-400">Choose this to optimize fertilizer application based on N-P-K ratios and soil chemistry.</p>
              </div>
              <div className="rounded-[24px] border border-slate-800/60 bg-slate-900/70 p-5">
                <div className="font-semibold text-white">Yield Forecast</div>
                <p className="mt-2 text-sm text-slate-400">Use it to project expected results from current crop conditions and weather factors.</p>
              </div>
            </div>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-800/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
            >
              Back to dashboard
              <HiOutlineArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="premium-card">
          <h3 className="text-xl font-bold text-white">Why start here?</h3>
          <p className="mt-3 text-slate-300">The start page helps you pick the right workflow before filling any prediction form. This keeps the experience consistent and makes it easier to find the tool you need.</p>
        </div>
        <div className="premium-card">
          <h3 className="text-xl font-bold text-white">One place for all tools</h3>
          <p className="mt-3 text-slate-300">Access all three predictions from one central menu so nothing is hidden behind a single model.</p>
        </div>
        <div className="premium-card">
          <h3 className="text-xl font-bold text-white">Fast setup</h3>
          <p className="mt-3 text-slate-300">Choose your goal, then answer only the data fields required for that prediction.</p>
        </div>
      </section>
    </main>
  )
}
