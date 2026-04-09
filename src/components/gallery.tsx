import React from 'react';
import { Reveal } from './reveal';
import { Instagram } from 'lucide-react';

const galleryItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1549419163-f0ed00d3663b?q=80&w=500", category: "Corte Masculino" },
  { id: 2, src: "https://images.unsplash.com/photo-1596767746197-f5e9273c5240?q=80&w=500", category: "Luzes e Cores" },
  { id: 3, src: "https://images.unsplash.com/photo-1603987995171-eb17a02c842b?q=80&w=500", category: "Barba Completa" },
  { id: 4, src: "https://images.unsplash.com/photo-1534005886675-10499e072ee4?q=80&w=500", category: "Hidratação" },
  { id: 5, src: "https://images.unsplash.com/photo-1574971053422-921d7b172a6a?q=80&w=500", category: "Corte Feminino" },
  { id: 6, src: "https://images.unsplash.com/photo-1565451996515-e2e4299b6623?q=80&w=500", category: "Degradê Profissional" },
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-16 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="mb-16 md:mb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.75 w-12 bg-brand-red" />
              <span className="text-brand-red font-black text-sm uppercase tracking-[0.2em]">Galeria</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-8xl font-sans font-black uppercase leading-[0.8] italic text-black">
              Resultados <br />
              <span className="text-brand-red not-italic">Reais.</span>
            </h2>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="relative group">
                <div className="absolute -inset-2 border-[3px] border-brand-red opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />
                
                <div className="relative z-10 bg-black overflow-hidden border-[3px] border-black">
                  <img 
                    src={item.src} 
                    alt={item.category} 
                    className="w-full h-96 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  
                  <div className="absolute bottom-0 left-0 bg-brand-red px-4 py-2">
                    <span className="text-white font-black text-xs uppercase tracking-tighter">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Chamada Final Social */}
        <div className="mt-24 border-4 border-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[12px_12px_0_0_#000000]">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black uppercase italic leading-none mb-2">Gostou do que viu?</h3>
            <p className="text-gray-600 font-bold uppercase text-xs tracking-widest">Postamos transformações novas todos os dias no Instagram.</p>
          </div>
          
          <a className="flex items-center justify-center gap-4 w-full md:w-auto bg-brand-red text-white px-10 py-5 font-black text-sm uppercase tracking-tighter transition-all hover:bg-black hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none"
          href='https://www.instagram.com/salaovivian_paulo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
          target='_blank'
          >
            <Instagram size={24} strokeWidth={3} />
            Siga @VivianPauloStudio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;