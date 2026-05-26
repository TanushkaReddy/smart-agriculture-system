import React, { useState } from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom"

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* SIDEBAR */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* MAIN AREA */}
      <div className="flex-1 xl:ml-72 flex flex-col min-h-screen">
        {/* NAVBAR */}
        <Navbar onMenuClick={() => setOpen(true)} />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6">
          <Routes>
            {/* your routes */}
            {/* example */}
            <Route path="/" element={<div>Dashboard</div>} />
            <Route path="/crop" element={<div>Crop</div>} />
            <Route path="/fertilizer" element={<div>Fertilizer</div>} />
            <Route path="/yield" element={<div>Yield</div>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}