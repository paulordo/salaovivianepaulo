import React from "react";
import storefront from "../assets/images/storefront.webp";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-600px flex items-center justify-center overflow-hidden border-b-3px border-black"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={storefront}
          className="w-full h-full object-cover grayscale-20%"
          alt="Fachada do Salão Vivian e Paulo em Rolândia"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-black/50" />
      </div>

      <div className="relative z-10 mt-2 max-w-7xl mx-auto px-6 w-full h-[655px] md:h-[740px] text-center">
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-10 bg-brand-red" />
            <span className="text-white font-black tracking-0.3em text-xs uppercase shadow-sm">
              Desde 2014 em Rolândia
            </span>
            <div className="h-1 w-10 bg-brand-red" />
          </div>

          <p className="text-white/90 mt-50 md:mt-70 mb-0 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-tight bg-black/30 backdrop-blur-sm p-4 border-l-4 border-brand-red">
            Cuidado e carinho que você merece, com o profissionalismo que você
            busca.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10 mb-25">
            <a
              href="https://wa.me/5543999670078"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white border-3px border-black px-12 py-6 font-black text-lg uppercase tracking-tighter transition-all shadow-8px_8px_0_0_#000 hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:shadow-none"
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <div className="w-3px h-12 bg-brand-red shadow-2px_2px_0_0_#000"></div>
      </div>
    </section>
  );
};

export default Hero;
