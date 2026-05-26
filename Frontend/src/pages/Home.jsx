import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import { AnalyticsBar, AnalyticsPie } from '../components/ChartCard'
import homeHero from '../assets/crop_natgeo.jpg'
import cropHero from '../assets/crop_shutterstock.jpg'
import fertilizerHero from '../assets/fertilizer_svaplant.jpg'
import yieldHero from '../assets/yield_corn_combine.jpg'

const stats = [
  {label:'Farms Monitored', value:'2,340', color:'from-sky-500 to-cyan-500', accent:'text-cyan-400', icon:'🌾'},
  {label:'Active Sensors', value:'8,920', color:'from-emerald-500 to-green-500', accent:'text-emerald-400', icon:'📡'},
  {label:'Avg Yield', value:'2.8 t/ha', color:'from-amber-500 to-orange-500', accent:'text-amber-400', icon:'📈'},
  {label:'Recommendations', value:'24.5K', color:'from-pink-500 to-rose-500', accent:'text-rose-400', icon:'✨'},
]

const barData = [
  {name:'Rice', value:450},
  {name:'Wheat', value:420},
  {name:'Maize', value:380},
  {name:'Cotton', value:290}
]

const pieData = [
  {name:'Nutrition', value:45},
  {name:'Water', value:28},
  {name:'Pest Control', value:18},
  {name:'Labor', value:9}
]

export default function Home(){
  return (
    <main className="p-6 xl:p-8 max-w-[1800px] mx-auto">
      <HeroSection
        title="Smart Farming"
        highlight="Made Simple"
        subtitle="Real-time ML predictions for crops, nutrient planning, and yield forecasting. Grow smarter and harvest more."
        primaryButton={{ label: 'Predict Crop', to: '/crop' }}
        secondaryButton={{ label: 'Fertilizer Planner', to: '/fertilizer' }}
        tertiaryButton={{ label: 'Yield Forecast', to: '/yield' }}
        heroLabel="Farm Intelligence"
        heroTitle="Premium agriculture insights"
        heroDescription="Harness machine learning across crops, nutrients and yields in one polished dashboard."
        heroImage={homeHero}
        heroAlt="Modern farm landscape"
        heroStats={[
          { label: 'Model Accuracy', value: '92%', color: 'from-blue-400 to-cyan-400' },
          { label: 'Farm Records', value: '50K+', color: 'from-emerald-400 to-green-400' },
          { label: 'Tools Available', value: '3 Tools', color: 'from-amber-400 to-orange-400' }
        ]}
      />

      <section className="mb-12 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="premium-card relative overflow-hidden border border-white/10 bg-slate-950/80 shadow-premium">
          <img src={homeHero} alt="Farm dashboard illustration" className="absolute inset-0 h-full w-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-slate-950/70"></div>
          <div className="relative p-8 lg:p-12">
            <span className="badge-success">Dashboard Overview</span>
            <h2 className="mt-5 text-4xl font-black text-white">A powerful farm dashboard with rich imagery.</h2>
            <p className="mt-4 text-slate-300 max-w-2xl">See performance metrics, live recommendations and yield forecasting in a design that feels polished and professional.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-slate-950/90 border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300 font-semibold">Insight</p>
                <p className="mt-3 text-2xl font-bold text-white">Predictive AI</p>
              </div>
              <div className="rounded-[24px] bg-slate-950/90 border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-semibold">Impact</p>
                <p className="mt-3 text-2xl font-bold text-white">More yield</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="premium-card relative overflow-hidden border border-white/10 bg-slate-950/80 shadow-premium h-56">
            <img src={cropHero} alt="Soil data illustration" className="absolute inset-0 h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-slate-950/60"></div>
            <div className="relative p-6">
              <span className="badge-pill">Soil Health</span>
              <h3 className="mt-4 text-2xl font-bold text-white">Instant field clarity</h3>
              <p className="mt-2 text-sm text-slate-300">Understand soil conditions in seconds.</p>
            </div>
          </div>
          <div className="premium-card relative overflow-hidden border border-white/10 bg-slate-950/80 shadow-premium h-56">
            <img src={fertilizerHero} alt="Yield planning illustration" className="absolute inset-0 h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-slate-950/60"></div>
            <div className="relative p-6">
              <span className="badge-pill">Yield Forecast</span>
              <h3 className="mt-4 text-2xl font-bold text-white">Plan with confidence</h3>
              <p className="mt-2 text-sm text-slate-300">A smart overview for better harvest decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {stats.map(item => (
            <div key={item.label} className="premium-card group overflow-hidden">
              <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-3xl transition duration-300 group-hover:opacity-30`}></div>
              <div className="relative">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400 font-semibold">{item.label}</div>
                <div className={`mt-4 text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.value}</div>
                <div className={`mt-2 text-xs font-semibold ${item.accent}`}>↑ 12% this month</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="premium-card overflow-hidden border border-white/10 bg-slate-950/90 shadow-premium">
            <img src={cropHero} alt="Crop analytics" className="h-64 w-full object-cover opacity-95" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">Crop Insight</h3>
              <p className="mt-2 text-slate-300 text-sm">Predict the right crop for your soil using actionable data visuals.</p>
            </div>
          </div>
          <div className="premium-card overflow-hidden border border-white/10 bg-slate-950/90 shadow-premium">
            <img src={fertilizerHero} alt="Fertilizer planning" className="h-64 w-full object-cover opacity-95" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">Fertilizer Guide</h3>
              <p className="mt-2 text-slate-300 text-sm">See nutrient planning with clear visuals and intelligent recommendations.</p>
            </div>
          </div>
          <div className="premium-card overflow-hidden border border-white/10 bg-slate-950/90 shadow-premium">
            <img src={yieldHero} alt="Yield forecast" className="h-64 w-full object-cover opacity-95" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">Harvest Forecast</h3>
              <p className="mt-2 text-slate-300 text-sm">Forecast yields with confidence thanks to intuitive visuals and predictive models.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr] mb-12">
        <div className="space-y-6">
          <div className="premium-card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Smart Farm Intelligence</h2>
                <p className="mt-2 text-slate-300">Real-time analytics for maximum yields</p>
              </div>
              <span className="badge-success">Live</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              <div className="rounded-[24px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-5">
                <div className="text-xs uppercase tracking-[0.28em] text-cyan-300 font-semibold">Soil Health</div>
                <div className="mt-3 text-3xl font-bold text-white">89%</div>
                <div className="mt-1 text-xs text-slate-400">Optimal levels</div>
              </div>
              <div className="rounded-[24px] bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 p-5">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald-300 font-semibold">Water Use</div>
                <div className="mt-3 text-3xl font-bold text-white">76%</div>
                <div className="mt-1 text-xs text-slate-400">Efficient</div>
              </div>
              <div className="rounded-[24px] bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 p-5">
                <div className="text-xs uppercase tracking-[0.28em] text-orange-300 font-semibold">Yield Boost</div>
                <div className="mt-3 text-3xl font-bold text-white">+21%</div>
                <div className="mt-1 text-xs text-slate-400">Projected</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <AnalyticsBar data={barData} />
            <AnalyticsPie data={pieData} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="premium-card relative overflow-hidden h-80 bg-slate-950/80">
            <img src={homeHero} alt="Connected farming illustration" className="absolute inset-0 h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white">Connected Farming</h3>
              <p className="mt-2 text-slate-300">Seamless integration with your field equipment</p>
            </div>
          </div>

          <div className="premium-card">
            <h3 className="text-lg font-bold text-white mb-4">Recent Insights</h3>
            <div className="space-y-3">
              <div className="rounded-[20px] border border-cyan-500/30 bg-cyan-500/10 p-4 hover:bg-cyan-500/15 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-cyan-300">Crop Update</span>
                  <span className="text-xs text-slate-400">Today</span>
                </div>
                <p className="text-sm text-slate-300">Switch to rice variety in southern zones for better yields</p>
              </div>
              <div className="rounded-[20px] border border-emerald-500/30 bg-emerald-500/10 p-4 hover:bg-emerald-500/15 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-emerald-300">Fertilizer</span>
                  <span className="text-xs text-slate-400">2 days ago</span>
                </div>
                <p className="text-sm text-slate-300">Nitrogen levels optimal for next season</p>
              </div>
              <div className="rounded-[20px] border border-orange-500/30 bg-orange-500/10 p-4 hover:bg-orange-500/15 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-orange-300">Yield Forecast</span>
                  <span className="text-xs text-slate-400">3 days ago</span>
                </div>
                <p className="text-sm text-slate-300">Expected yield increase of 15% this quarter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <Link to="/crop" className="premium-card relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-blue-500/10 to-transparent"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl"></div>
            <div className="relative">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white">Crop Prediction</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">Get field-specific crop guidance based on soil, weather, and nutrient conditions.</p>
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs font-semibold hover:bg-blue-500/30 transition">Predict Crop →</div>
            </div>
          </Link>

          <Link to="/fertilizer" className="premium-card relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-emerald-500/10 to-transparent"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl"></div>
            <div className="relative">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-white">Fertilizer Planner</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">Optimize NPK application with smart nutrient analysis for maximum crop growth.</p>
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition">Start Fertilizer →</div>
            </div>
          </Link>

          <Link to="/yield" className="premium-card relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/25 via-amber-500/10 to-transparent"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl"></div>
            <div className="relative">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white">Yield Forecast</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">Predict harvest outcomes using crop history, climate data and advanced ML models.</p>
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-semibold hover:bg-amber-500/30 transition">Forecast →</div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
