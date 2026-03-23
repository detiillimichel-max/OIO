'use client';

import { useState, useRef, useEffect } from 'react';

// OIO ONE - Interface de Profundidade Orgânica
const SECTION_LABELS = ['OIO ONE CORE', 'OIO MEDIA', 'OIO CONNECT'];

export default function OioOneCore() {
  const [activeSection, setActiveSection] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Controle de Scroll para as seções de vídeo
  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / sectionHeight);
      if (newIndex !== activeSection && newIndex >= 0 && newIndex < 3) {
        setActiveSection(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden font-sans tracking-tighter text-white">
      
      {/* CAMADA 0: FEED DE VÍDEO (70% do visual focado no topo) */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 z-0 overflow-y-auto snap-y snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none' }}
      >
        {[0, 1, 2].map((index) => (
          <section
            key={index}
            className="relative h-screen w-full snap-start snap-always flex items-center justify-center bg-zinc-950"
          >
            {/* Placeholder para o Vídeo - Você colocará os links dos vídeos aqui depois */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-emerald-900/20 to-black" />
            
            <div className="relative z-10 opacity-30 flex flex-col items-center">
              <div className="w-20 h-20 border border-zinc-800 rounded-full flex items-center justify-center mb-4">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-zinc-700 border-b-[10px] border-b-transparent ml-1" />
              </div>
              <p className="text-[10px] tracking-[.5em] uppercase text-zinc-600 font-medium">
                {SECTION_LABELS[index]}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* CAMADA 1: GAVETA DE VIDRO (FIXA NO BOTTOM 30%) */}
      <section className="absolute bottom-0 left-0 right-0 h-[35vh] z-20 bg-zinc-950/20 backdrop-blur-3xl border-t border-white/[0.03] rounded-t-[48px] px-8 pt-6 pb-8 flex flex-col shadow-2xl">
        <div className="w-full flex justify-center mb-6">
          <div className="w-10 h-1 bg-white/10 rounded-full" />
        </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-14 h-14 rounded-full border border-white/10 p-1 bg-zinc-900/30">
              <div className="w-full h-full rounded-full bg-zinc-800/50 flex items-center justify-center overflow-hidden">
                <span className="text-zinc-600 font-bold text-xs">USER</span>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white/90 tracking-tighter uppercase">Identity Layer</h1>
            <span className="text-[10px] text-emerald-500/80 uppercase tracking-widest font-bold">OIO 1.0 Active</span>
          </div>
        </div>

        {/* Espaço para o Chat que criaremos na Aula 2 */}
        <div className="flex-1 mt-6 border border-dashed border-white/5 rounded-2xl flex items-center justify-center">
          <p className="text-zinc-700 text-[10px] uppercase tracking-widest italic">Connection Stream Offline</p>
        </div>
      </section>

    </main>
  );
}

