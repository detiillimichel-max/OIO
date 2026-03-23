'use client'

import { useState } from 'react'

// OIO 1.0 - Gaveta de Interação Orgânica (DNA)
export function GlassDrawer() {
  const [ripples, setRipples] = useState<{ id: number }[]>([])

  const handleClick = () => {
    const rippleId = Date.now()
    setRipples((prev) => [...prev, { id: rippleId }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== rippleId))
    }, 300)
  }

  return (
    <section 
      className="fixed bottom-0 left-0 right-0 h-[32vh] z-20 bg-zinc-950/20 backdrop-blur-3xl border-t border-white/[0.03] rounded-t-[48px] px-8 pt-6 pb-8 flex flex-col shadow-2xl overflow-hidden"
    >
      {/* ALÇA DE ARRASTE (ERGONOMIA) */}
      <div className="w-full flex justify-center mb-6 shrink-0">
        <div className="w-10 h-1 bg-white/10 rounded-full" />
      </div>

      {/* BLOCO DE IDENTIDADE (CAMADA 1) */}
      <div className="flex items-center gap-5 shrink-0">
        <div className="relative">
          <div className="w-14 h-14 rounded-full border border-white/10 p-1 bg-zinc-900/30">
            <div className="w-full h-full rounded-full bg-zinc-800/50 flex items-center justify-center overflow-hidden">
              <span className="text-zinc-600 font-bold text-xs uppercase">User</span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-white/90 tracking-tighter uppercase italic">Identity Layer</h1>
          <span className="text-[10px] text-emerald-500/80 uppercase tracking-widest font-bold">OIO 1.0 Active</span>
        </div>
      </div>

      {/* ÁREA DE CONEXÃO (CHAT PLACEHOLDER) - Onde o Chat morará */}
      <button 
        onClick={handleClick}
        className="flex-1 mt-6 border border-dashed border-white/5 rounded-2xl flex items-center justify-center p-4 relative group"
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-white/5 animate-ripple-btn pointer-events-none"
          />
        ))}
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest italic group-hover:text-white transition-colors">Connection Stream Offline</p>
      </button>

    </section>
  )
}
