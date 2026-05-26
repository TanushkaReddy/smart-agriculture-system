import React, {useState} from 'react'
import PredictionCard from '../components/PredictionCard'
import ResultCard from '../components/ResultCard'
import Loader from '../components/Loader'
import api from '../services/api'
import yieldHero from '../assets/yield_corn_combine.jpg'
import cropHero from '../assets/crop_shutterstock.jpg'
import cropNat from '../assets/crop_natgeo.jpg'
import HeroSection from '../components/HeroSection'

export default function YieldPrediction(){
  const cropOptions = [
    { label: 'Arecanut', value: 0 },
    { label: 'Arhar/Tur', value: 1 },
    { label: 'Bajra', value: 2 },
    { label: 'Banana', value: 3 },
    { label: 'Barley', value: 4 },
    { label: 'Black pepper', value: 5 },
    { label: 'Cardamom', value: 6 },
    { label: 'Cashewnut', value: 7 },
    { label: 'Castor seed', value: 8 },
    { label: 'Coconut', value: 9 },
    { label: 'Coriander', value: 10 },
    { label: 'Cotton(lint)', value: 11 },
    { label: 'Cowpea(Lobia)', value: 12 },
    { label: 'Dry chillies', value: 13 },
    { label: 'Garlic', value: 14 },
    { label: 'Ginger', value: 15 },
    { label: 'Gram', value: 16 },
    { label: 'Groundnut', value: 17 },
    { label: 'Guar seed', value: 18 },
    { label: 'Horse-gram', value: 19 },
    { label: 'Jowar', value: 20 },
    { label: 'Jute', value: 21 },
    { label: 'Khesari', value: 22 },
    { label: 'Linseed', value: 23 },
    { label: 'Maize', value: 24 },
    { label: 'Masoor', value: 25 },
    { label: 'Mesta', value: 26 },
    { label: 'Moong(Green Gram)', value: 27 },
    { label: 'Moth', value: 28 },
    { label: 'Niger seed', value: 29 },
    { label: 'Oilseeds total', value: 30 },
    { label: 'Onion', value: 31 },
    { label: 'Other Rabi pulses', value: 32 },
    { label: 'Other Cereals', value: 33 },
    { label: 'Other Kharif pulses', value: 34 },
    { label: 'Other Summer Pulses', value: 35 },
    { label: 'Peas & beans (Pulses)', value: 36 },
    { label: 'Potato', value: 37 },
    { label: 'Ragi', value: 38 },
    { label: 'Rapeseed &Mustard', value: 39 },
    { label: 'Rice', value: 40 },
    { label: 'Safflower', value: 41 },
    { label: 'Sannhamp', value: 42 },
    { label: 'Sesamum', value: 43 },
    { label: 'Small millets', value: 44 },
    { label: 'Soyabean', value: 45 },
    { label: 'Sugarcane', value: 46 },
    { label: 'Sunflower', value: 47 },
    { label: 'Sweet potato', value: 48 },
    { label: 'Tapioca', value: 49 },
    { label: 'Tobacco', value: 50 },
    { label: 'Turmeric', value: 51 },
    { label: 'Urad', value: 52 },
    { label: 'Wheat', value: 53 },
    { label: 'Other oilseeds', value: 54 }
  ]

  const seasonOptions = [
    { label: 'Autumn', value: 0 },
    { label: 'Kharif', value: 1 },
    { label: 'Rabi', value: 2 },
    { label: 'Summer', value: 3 },
    { label: 'Whole Year', value: 4 },
    { label: 'Winter', value: 5 }
  ]

  const stateOptions = [
    { label: 'Andhra Pradesh', value: 0 },
    { label: 'Arunachal Pradesh', value: 1 },
    { label: 'Assam', value: 2 },
    { label: 'Bihar', value: 3 },
    { label: 'Chhattisgarh', value: 4 },
    { label: 'Delhi', value: 5 },
    { label: 'Goa', value: 6 },
    { label: 'Gujarat', value: 7 },
    { label: 'Haryana', value: 8 },
    { label: 'Himachal Pradesh', value: 9 },
    { label: 'Jammu and Kashmir', value: 10 },
    { label: 'Jharkhand', value: 11 },
    { label: 'Karnataka', value: 12 },
    { label: 'Kerala', value: 13 },
    { label: 'Madhya Pradesh', value: 14 },
    { label: 'Maharashtra', value: 15 },
    { label: 'Manipur', value: 16 },
    { label: 'Meghalaya', value: 17 },
    { label: 'Mizoram', value: 18 },
    { label: 'Nagaland', value: 19 },
    { label: 'Odisha', value: 20 },
    { label: 'Puducherry', value: 21 },
    { label: 'Punjab', value: 22 },
    { label: 'Sikkim', value: 23 },
    { label: 'Tamil Nadu', value: 24 },
    { label: 'Telangana', value: 25 },
    { label: 'Tripura', value: 26 },
    { label: 'Uttar Pradesh', value: 27 },
    { label: 'Uttarakhand', value: 28 },
    { label: 'West Bengal', value: 29 }
  ]

  const [form, setForm] = useState({
    crop: '53',
    crop_year: '2024',
    season: '1',
    state: '2',
    area: '',
    production: '',
    rainfall: '',
    pesticide: '',
    fertilizer: ''
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async e =>{
    e.preventDefault(); setLoading(true); setResult(null); setError(null)
    try{
      const payload = {
        crop: Number(form.crop),
        crop_year: Number(form.crop_year),
        season: Number(form.season),
        state: Number(form.state),
        area: Number(form.area),
        production: Number(form.production),
        rainfall: Number(form.rainfall),
        pesticide: Number(form.pesticide),
        fertilizer: Number(form.fertilizer)
      }
      const resp = await api.post('/yield/predict', payload)
      setResult(resp.data?.predicted_yield || JSON.stringify(resp.data))
    }catch(err){
      setError(err.response?.data?.detail || err.message || 'Failed')
    }finally{setLoading(false)}
  }

  return (
    <main className="p-6 xl:p-8 max-w-[1400px] mx-auto">
      <HeroSection
        title="Yield forecasting"
        highlight="with confidence"
        subtitle="Predict harvest potential across crop, season, and state so your farm planning looks premium and strategic."
        primaryButton={{ label: 'Go to inputs', to: '#prediction-form' }}
        secondaryButton={{ label: 'Back to Dashboard', to: '/' }}
        heroLabel="Harvest Insights"
        heroTitle="Forecast next season"
        heroDescription="Understand expected yield before harvest and make data-informed farming decisions."
        heroImage={yieldHero}
        heroAlt="Combine harvester in field"
        heroStats={[
          { label: 'Seasons', value: '6', color: 'from-blue-400 to-cyan-400' },
          { label: 'States', value: '30+', color: 'from-emerald-400 to-green-400' },
          { label: 'Forecasts', value: '24h', color: 'from-amber-400 to-orange-400' }
        ]}
      />

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] mb-8">
        <div className="premium-card rounded-[32px] border border-white/10 bg-slate-950/90 shadow-premium overflow-hidden">
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-700 via-yellow-500 to-amber-500">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.35),_transparent_25%)]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-xl">
                <span className="badge-success">Forecast snapshot</span>
                <h2 className="mt-3 text-3xl font-bold text-white">Yield predictions with crop-level clarity</h2>
                <p className="mt-3 text-sm text-slate-300">Use this model to compare harvest potential across season, state and resource inputs.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="premium-card rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-premium">
              <span className="badge-pill">How it helps</span>
              <h3 className="mt-4 text-2xl font-semibold text-white">Make yield planning actionable</h3>
              <p className="mt-3 text-slate-300">A clear forecast helps you allocate irrigation, fertilizer and harvest timing for the season ahead.</p>
              <ul className="mt-5 space-y-3 text-slate-400">
                <li>• Compare crop options across state and season.</li>
                <li>• Understand how rainfall and input use impact yield.</li>
                <li>• Turn prediction output into practical farm decisions.</li>
              </ul>
            </div>
            <div className="rounded-[32px] overflow-hidden border border-white/10 bg-slate-950/90 shadow-premium h-64 relative">
              <img src={yieldHero} alt="Yield forecast" className="absolute inset-0 h-full w-full object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent"></div>
              <div className="relative h-full p-6 flex flex-col justify-end">
                <span className="badge-pill">Yield forecast</span>
                <h3 className="mt-4 text-2xl font-bold text-white">Predict harvest results</h3>
                <p className="mt-2 text-sm text-slate-300">Turn crop, state and season data into a stronger harvest plan.</p>
              </div>
            </div>
          </div>
        </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <PredictionCard id="prediction-form" title="Yield Inputs">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <select required name="crop" value={form.crop} onChange={handleChange} className="input-field">
                {cropOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input required name="crop_year" type="number" value={form.crop_year} onChange={handleChange} placeholder="Crop Year" className="input-field" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <select required name="season" value={form.season} onChange={handleChange} className="input-field">
                {seasonOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <select required name="state" value={form.state} onChange={handleChange} className="input-field">
                {stateOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input required type="number" name="area" value={form.area} onChange={handleChange} placeholder="Area (ha)" className="input-field" />
              <input required type="number" name="production" value={form.production} onChange={handleChange} placeholder="Production" className="input-field" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input required type="number" name="rainfall" value={form.rainfall} onChange={handleChange} placeholder="Rainfall (mm)" className="input-field" />
              <input required type="number" name="pesticide" value={form.pesticide} onChange={handleChange} placeholder="Pesticide (kg)" className="input-field" />
            </div>
            <input required type="number" name="fertilizer" value={form.fertilizer} onChange={handleChange} placeholder="Fertilizer (kg)" className="input-field" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" className="btn-primary">{loading? 'Predicting...':'Predict Yield'}</button>
              {loading && <Loader size={28} />}
            </div>
            {error && <div className="text-sm text-red-600">{error}</div>}
          </form>
        </PredictionCard>

        <div className="space-y-6">
          <div className="card bg-slate-950/90 border-slate-800/60">
            <h3 className="section-title">Result</h3>
            {!loading && result && <ResultCard title="Predicted Yield" result={result} details="Values are estimates — combine with domain knowledge." />}
            {!loading && !result && <div className="mt-4 text-slate-300">Complete the form to get the expected yield forecast.</div>}
            {loading && <div className="mt-6"><Loader size={48} /></div>}
          </div>
          <div className="card bg-slate-950/90 border-slate-800/60">
            <h3 className="text-xl font-semibold text-white">Prediction notes</h3>
            <p className="mt-3 text-slate-300">Yield predictions are based on crop selection, weather and nutrient data. Use them to refine irrigation and material planning.</p>
            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
              <li>• Check the forecast against local seasonal trends.</li>
              <li>• Use this output to optimize harvest timing.</li>
              <li>• Combine model insight with field observations.</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 shadow-premium transition hover:-translate-y-1">
          <div className="relative h-56 overflow-hidden">
            <img src={yieldHero} alt="Harvest view" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-slate-950/10 mix-blend-overlay"></div>
          </div>
          <div className="p-6">
            <span className="badge-pill">Harvest view</span>
            <h3 className="mt-4 text-2xl font-bold text-white">Forecast with context</h3>
            <p className="mt-3 text-sm text-slate-300">See how yield estimates connect to real harvest conditions and seasonal timing.</p>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 shadow-premium transition hover:-translate-y-1">
          <div className="relative h-56 overflow-hidden">
            <img src={cropNat} alt="Farm planning" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-slate-950/10 mix-blend-overlay"></div>
          </div>
          <div className="p-6">
            <span className="badge-pill">Farm planning</span>
            <h3 className="mt-4 text-2xl font-bold text-white">Optimize your season</h3>
            <p className="mt-3 text-sm text-slate-300">Use yield insights to schedule planting, irrigation and harvest more effectively.</p>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 shadow-premium transition hover:-translate-y-1">
          <div className="relative h-56 overflow-hidden">
            <img src={cropHero} alt="Analytics" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-slate-950/10 mix-blend-overlay"></div>
          </div>
          <div className="p-6">
            <span className="badge-pill">Analytics</span>
            <h3 className="mt-4 text-2xl font-bold text-white">Data-driven harvests</h3>
            <p className="mt-3 text-sm text-slate-300">Combine weather, area and input data to improve your yield planning and decisions.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
