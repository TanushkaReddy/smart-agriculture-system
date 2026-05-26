import React, {useState} from 'react'
import PredictionCard from '../components/PredictionCard'
import ResultCard from '../components/ResultCard'
import Loader from '../components/Loader'
import api from '../services/api'
import cropHero from '../assets/crop_shutterstock.jpg'
import cropNat from '../assets/crop_natgeo.jpg'
import yieldCombine from '../assets/yield_corn_combine.jpg'
import HeroSection from '../components/HeroSection'

export default function CropPrediction(){
  const [form, setForm] = useState({N:'',P:'',K:'',temperature:'',humidity:'',ph:'',rainfall:''})
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async e =>{
    e.preventDefault()
    setLoading(true); setError(null); setResult(null)
    try{
      const payload = {
        N: Number(form.N),
        P: Number(form.P),
        K: Number(form.K),
        temperature: Number(form.temperature),
        humidity: Number(form.humidity),
        ph: Number(form.ph),
        rainfall: Number(form.rainfall)
      }
      const resp = await api.post('/crop/predict', payload)
      setResult(resp.data?.recommended_crop || JSON.stringify(resp.data))
    }catch(err){
      setError(err.response?.data?.detail || err.message || 'Prediction failed')
    }finally{setLoading(false)}
  }

  return (
    <main className="p-6 xl:p-8 max-w-[1400px] mx-auto">
      <HeroSection
        title="Crop recommendations"
        highlight="for every field"
        subtitle="Provide soil and weather inputs to receive actionable, farm-ready crop guidance that looks premium and modern."
        primaryButton={{ label: 'Go to inputs', to: '#prediction-form' }}
        secondaryButton={{ label: 'Back to Dashboard', to: '/' }}
        heroLabel="Crop Choice"
        heroTitle="Find the best crop match"
        heroDescription="Leverage soil, climate and rainfall data to select the crop with the highest promise."
        heroImage={cropHero}
        heroAlt="Crop field image"
        heroStats={[
          { label: 'Soil Models', value: '5+', color: 'from-blue-400 to-cyan-400' },
          { label: 'Crops Covered', value: '55+', color: 'from-emerald-400 to-green-400' },
          { label: 'Confidence', value: '94%', color: 'from-amber-400 to-orange-400' }
        ]}
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <PredictionCard id="prediction-form" title="Field Inputs">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-3">
              <input required name="N" value={form.N} onChange={handleChange} placeholder="Nitrogen (N)" className="input-field" />
              <input required name="P" value={form.P} onChange={handleChange} placeholder="Phosphorus (P)" className="input-field" />
              <input required name="K" value={form.K} onChange={handleChange} placeholder="Potassium (K)" className="input-field" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input required name="temperature" value={form.temperature} onChange={handleChange} placeholder="Temperature (°C)" className="input-field" />
              <input required name="humidity" value={form.humidity} onChange={handleChange} placeholder="Humidity (%)" className="input-field" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input required name="ph" value={form.ph} onChange={handleChange} placeholder="Soil pH" className="input-field" />
              <input required name="rainfall" value={form.rainfall} onChange={handleChange} placeholder="Rainfall (mm)" className="input-field" />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" className="btn-primary">{loading ? 'Predicting...' : 'Get recommendation'}</button>
              {loading && <Loader size={28} />}
            </div>
            {error && <div className="text-sm text-red-600">{error}</div>}
          </form>
        </PredictionCard>

        <div className="space-y-6">
          <div className="premium-card bg-slate-950/90 border-slate-800/60">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="section-title">Prediction result</h3>
                <p className="mt-2 text-sm text-slate-300">Your AI-driven crop guidance appears here.</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300 border border-emerald-500/20">Smart output</span>
            </div>
            {!loading && result && <ResultCard title="Recommended Crop" result={result} details="Apply local validation and irrigation recommendations for best yield." />}
            {!loading && result && (
              <div className="mt-6 rounded-[28px] border border-slate-800 bg-slate-950/95 p-5 text-slate-100 shadow-soft-dark">
                <h4 className="text-lg font-semibold text-white">Why this crop?</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">Our model matched your soil chemistry, humidity, temperature and rainfall values to suggest the crop best suited to your field conditions.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-3 text-sm text-slate-100">
                    <span className="block font-semibold">Soil fit</span>
                    <span className="mt-2 block text-xs text-slate-400">NPK + pH balanced</span>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-3 text-sm text-slate-100">
                    <span className="block font-semibold">Weather</span>
                    <span className="mt-2 block text-xs text-slate-400">Temperature & rainfall aligned</span>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-3 text-sm text-slate-100">
                    <span className="block font-semibold">Yield goal</span>
                    <span className="mt-2 block text-xs text-slate-400">Optimized for farm resilience</span>
                  </div>
                </div>
              </div>
            )}
            {!loading && !result && <div className="mt-6 text-slate-600 dark:text-slate-400">Complete the form to see a personalized crop recommendation.</div>}
            {loading && <div className="mt-6"><Loader size={48} /></div>}
          </div>

          <div className="premium-card bg-slate-950/90 border-slate-800/60">
            <h3 className="text-xl font-semibold text-white">How it works</h3>
            <p className="mt-3 text-slate-300">The model analyzes soil nutrient levels, temperature, humidity and rainfall to recommend the crop most likely to thrive.</p>
            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
              <li>• Uses N-P-K and pH data for soil suitability.</li>
              <li>• Accounts for temperature, humidity and rainfall.</li>
              <li>• Returns a simple, actionable crop recommendation.</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 shadow-premium transition hover:-translate-y-1">
          <div className="relative h-56 overflow-hidden">
            <img src={cropHero} alt="Field imagery" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-slate-950/10 mix-blend-overlay"></div>
          </div>
          <div className="p-6">
            <span className="badge-pill">Field imagery</span>
            <h3 className="mt-4 text-2xl font-bold text-white">Farm-ready crop insight</h3>
            <p className="mt-3 text-sm text-slate-300">Visual examples show why the model selects crops based on soil, climate and moisture conditions.</p>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 shadow-premium transition hover:-translate-y-1">
          <div className="relative h-56 overflow-hidden">
            <img src={cropNat} alt="Soil insights" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-slate-950/10 mix-blend-overlay"></div>
          </div>
          <div className="p-6">
            <span className="badge-pill">Soil science</span>
            <h3 className="mt-4 text-2xl font-bold text-white">Nutrient-based recommendations</h3>
            <p className="mt-3 text-sm text-slate-300">Each recommendation is grounded in soil chemistry and crop suitability for better field performance.</p>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 shadow-premium transition hover:-translate-y-1">
          <div className="relative h-56 overflow-hidden">
            <img src={yieldCombine} alt="Harvest ready" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-slate-950/10 mix-blend-overlay"></div>
          </div>
          <div className="p-6">
            <span className="badge-pill">Harvest ready</span>
            <h3 className="mt-4 text-2xl font-bold text-white">Plan with confidence</h3>
            <p className="mt-3 text-sm text-slate-300">Use the predicted crop recommendation to align planting with your local climate and harvest goals.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
