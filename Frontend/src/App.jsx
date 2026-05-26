import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import CropPrediction from './pages/CropPrediction'
import FertilizerPrediction from './pages/FertilizerPrediction'
import YieldPrediction from './pages/YieldPrediction'

const pageTransition = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 }
}

export default function App() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex min-h-[calc(100vh-96px)]">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 p-4 pb-10 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/crop" element={<CropPrediction />} />
                <Route path="/fertilizer" element={<FertilizerPrediction />} />
                <Route path="/yield" element={<YieldPrediction />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}