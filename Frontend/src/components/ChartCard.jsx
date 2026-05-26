import React from 'react'
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function AnalyticsBar({ data }){
  return (
    <div className="premium-card">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">Crop Production</h3>
          <p className="mt-1 text-sm text-slate-300">Top yields by crop type</p>
        </div>
        <span className="badge-success">Live Data</span>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.95} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#cbd5e1', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#cbd5e1', fontSize: 12 }} />
            <Tooltip
              wrapperStyle={{
                borderRadius: 18,
                boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
                backgroundColor: 'rgba(15,23,42,0.98)',
                border: '1px solid rgba(56,189,248,0.2)',
                color: '#e2e8f0'
              }}
              contentStyle={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: '14px 18px',
                color: '#e2e8f0'
              }}
              labelStyle={{ color: '#94a3b8', fontSize: 12 }}
              itemStyle={{ color: '#f8fafc', fontSize: 14 }}
              cursor={{ fill: 'rgba(6,182,212,0.12)' }}
            />
            <Bar dataKey="value" radius={[16, 16, 0, 0]} fill="url(#barGradient)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export function AnalyticsPie({ data }){
  const colors = ['#06b6d4', '#10b981', '#f59e0b', '#ec4899']
  return (
    <div className="premium-card">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">Resource Allocation</h3>
          <p className="mt-1 text-sm text-slate-300">Distribution of farming inputs</p>
        </div>
        <span className="badge-success">Updated</span>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={60} paddingAngle={6}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip wrapperStyle={{ borderRadius: 16, boxShadow: '0 25px 60px rgba(0,0,0,0.3)', backgroundColor: 'rgba(15,23,42,0.95)', border: '1px solid rgba(6,182,212,0.3)' }} contentStyle={{ color: '#e2e8f0' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export function AnalyticsArea({ data }){
  return (
    <div className="premium-card">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">Yield Forecast</h3>
          <p className="mt-1 text-sm text-slate-300">Projected production growth</p>
        </div>
        <span className="badge-success">Trending</span>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.08} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#cbd5e1', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#cbd5e1', fontSize: 12 }} />
            <Tooltip wrapperStyle={{ borderRadius: 16, boxShadow: '0 25px 60px rgba(0,0,0,0.3)', backgroundColor: 'rgba(15,23,42,0.95)', border: '1px solid rgba(6,182,212,0.3)' }} contentStyle={{ color: '#e2e8f0' }} />
            <Area type="monotone" dataKey="value" stroke="#06b6d4" fill="url(#areaGlow)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
