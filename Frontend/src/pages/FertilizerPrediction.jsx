import React, { useState } from 'react'
import PredictionCard from '../components/PredictionCard'
import ResultCard from '../components/ResultCard'
import Loader from '../components/Loader'
import api from '../services/api'
import fertilizerHero from '../assets/fertilizer_shivchemagro.png'
import fertAzo from '../assets/fertilizer_azolifesciences.jpg'
import fertSvaplant from '../assets/fertilizer_svaplant.jpg'
import fertCoherent from '../assets/fertilizer_coherent.jpg'
import HeroSection from '../components/HeroSection'

export default function FertilizerPrediction() {
  const soilOptions = [
    { label: 'Black', value: 0 },
    { label: 'Clayey', value: 1 },
    { label: 'Loamy', value: 2 },
    { label: 'Red', value: 3 },
    { label: 'Sandy', value: 4 }
  ]

  const cropOptions = [
    { label: 'Barley', value: 0 },
    { label: 'Cotton', value: 1 },
    { label: 'Ground Nuts', value: 2 },
    { label: 'Maize', value: 3 },
    { label: 'Millets', value: 4 },
    { label: 'Oil seeds', value: 5 },
    { label: 'Paddy', value: 6 },
    { label: 'Pulses', value: 7 },
    { label: 'Sugarcane', value: 8 },
    { label: 'Tobacco', value: 9 },
    { label: 'Wheat', value: 10 }
  ]

  const [form, setForm] = useState({
    temperature: '',
    humidity: '',
    moisture: '',
    soil_type: '2',
    crop_type: '10',
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  })

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const payload = {
        temperature: Number(form.temperature),
        humidity: Number(form.humidity),
        moisture: Number(form.moisture),
        soil_type: Number(form.soil_type),
        crop_type: Number(form.crop_type),
        nitrogen: Number(form.nitrogen),
        phosphorus: Number(form.phosphorus),
        potassium: Number(form.potassium)
      }

      const resp = await api.post(`${import.meta.env.VITE_API_URL}/fertilizer/predict`, payload)

      setResult(
        resp.data?.recommended_fertilizer ||
          JSON.stringify(resp.data)
      )
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          err.message ||
          'Failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="p-6 xl:p-8 max-w-[1400px] mx-auto">
      <HeroSection
        title="Fertilizer planning"
        highlight="done right"
        subtitle="Add soil, crop and environment inputs to receive fertilizer recommendations tailored for farm efficiency."
        primaryButton={{ label: 'Go to inputs', to: '#prediction-form' }}
        secondaryButton={{ label: 'Back to Dashboard', to: '/' }}
        heroLabel="Precision Nutrition"
        heroTitle="Optimize fertilizer use"
        heroDescription="Balance nutrients and crop needs with an intelligent recommendation experience."
        heroImage={fertilizerHero}
        heroAlt="Fertilizer application in field"
        heroStats={[
          { label: 'Soil Types', value: '5', color: 'from-blue-400 to-cyan-400' },
          { label: 'Crop Types', value: '11', color: 'from-emerald-400 to-green-400' },
          { label: 'Accuracy', value: '91%', color: 'from-amber-400 to-orange-400' }
        ]}
      />

      {/* Info Section */}
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] mb-8">
        <div className="premium-card rounded-[32px] border border-white/10 bg-slate-950/90 shadow-premium p-6">
          <span className="badge-pill">Why this helps</span>
          <h2 className="mt-4 text-3xl font-bold text-white">
            Keep fertilizer use efficient and safe.
          </h2>
          <p className="mt-3 text-slate-300">
            The recommendation balances crop needs with soil condition so you apply the right nutrients without waste.
          </p>
        </div>

        <div className="rounded-[32px] overflow-hidden border border-white/10 bg-slate-950/90 shadow-premium h-72 relative">
          <img
            src={fertSvaplant}
            alt="Fertilizer application"
            className="absolute inset-0 h-full w-full object-cover opacity-95"
          />
        </div>
      </div>

      {/* Form + Result */}
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <PredictionCard id="prediction-form" title="Fertilizer Inputs">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid gap-4 md:grid-cols-3">
              <input name="temperature" value={form.temperature} onChange={handleChange} placeholder="Temperature (°C)" className="input-field" />
              <input name="humidity" value={form.humidity} onChange={handleChange} placeholder="Humidity (%)" className="input-field" />
              <input name="moisture" value={form.moisture} onChange={handleChange} placeholder="Moisture (%)" className="input-field" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <select name="soil_type" value={form.soil_type} onChange={handleChange} className="input-field">
                {soilOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>

              <select name="crop_type" value={form.crop_type} onChange={handleChange} className="input-field">
                {cropOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <input name="nitrogen" value={form.nitrogen} onChange={handleChange} placeholder="Nitrogen (N)" className="input-field" />
              <input name="phosphorus" value={form.phosphorus} onChange={handleChange} placeholder="Phosphorus (P)" className="input-field" />
              <input name="potassium" value={form.potassium} onChange={handleChange} placeholder="Potassium (K)" className="input-field" />
            </div>

            <button type="submit" className="btn-primary">
              {loading ? 'Calculating...' : 'Get Recommendation'}
            </button>

            {loading && <Loader size={28} />}
            {error && <div className="text-sm text-red-600">{error}</div>}
          </form>
        </PredictionCard>

        <div className="space-y-6">
          <div className="premium-card bg-slate-950/90 border-slate-800/60">
            <h3 className="section-title">Result</h3>
            {!loading && result && (
              <ResultCard title="Recommended Fertilizer" result={result} />
            )}
            {!loading && !result && (
              <div className="mt-4 text-slate-300">
                Submit the form to receive adaptive fertilizer guidance.
              </div>
            )}
            {loading && <Loader size={48} />}
          </div>
        </div>
      </div>

      {/* Bottom Cards (RESTORED FULL UI) */}
      <section className="mt-10 grid gap-6 lg:grid-cols-3">

        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900">
          <img src={fertAzo} className="h-56 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white">Targeted fertilizer use</h3>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900">
          <img src={fertSvaplant} className="h-56 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white">Healthy crop foundations</h3>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900">
          <img src={fertCoherent} className="h-56 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white">Better yields</h3>
          </div>
        </div>

      </section>
    </main>
  )
}