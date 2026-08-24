import React from "react";
import storefront from "../assets/images/storefront.webp";
import { Instagram, MessageCircle, Users, ArrowUpRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="início"
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

      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6">
        <div className="space-y-8 max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-10 bg-brand-red" />
            <span className="text-white font-black tracking-0.3em text-xs uppercase shadow-sm">
              Desde 2014 em Rolândia
            </span>
            <div className="h-1 w-10 bg-brand-red" />
          </div>

          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-tight bg-black/30 backdrop-blur-sm p-4 border-l-4 border-brand-red text-center">
            Cuidado e carinho que você merece, com o profissionalismo que você
            busca.
          </p>

          <div className="w-full max-w-md flex flex-col gap-3 pt-4">
            {/* WHATSAPP */}
            <a
              href="https://wa.me/5543999670078"
              target="_blank"
              rel="noopener noreferrer"
              className="
      group
      w-full
      flex items-center justify-between
      px-5 py-4
      bg-black/35
      backdrop-blur-md
      border border-white/30
      text-white
      transition-all duration-300
      hover:bg-white
      hover:text-black
      hover:border-white
    "
            >
              <div className="flex items-center gap-4">
                <MessageCircle
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#25D366]"
                />

                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
                    Agendar no WhatsApp
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/70 group-hover:text-black/50 transition-colors duration-300">
                    Horários Disponíveis
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* GRUPO */}
            <a
              href="https://chat.whatsapp.com/KDDlGV3BEd19wHC9yjoPBL?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="  group  w-full  flex items-center justify-between  px-5 py-4  bg-black/35  backdrop-blur-md  border border-white/30  text-white  transition-all duration-300  hover:bg-white  hover:text-black  hover:border-white"
            >
              <div className="flex items-center gap-4">
                <Users size={20} strokeWidth={1.8} className="text-brand-red" />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
                    Grupo de produtos
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/70 group-hover:text-black/50 transition-colors duration-300">
                    recomendações de produtos
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/vvivianpaulo/"
              target="_blank"
              rel="noopener noreferrer"
              className="   group   w-full   flex items-center justify-between   px-5 py-4   bg-black/35   backdrop-blur-md   border border-white/30   text-white   transition-all duration-300   hover:bg-white   hover:text-black   hover:border-white "
            >
              <div className="flex items-center gap-4">
                <Instagram size={20} strokeWidth={1.8} />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
                    Instagram
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/50 group-hover:text-black/50 transition-colors duration-300">
                    +11 mil seguidores
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* TIKTOK */}
            <a
              href="https://www.tiktok.com/@vivianepaulo22"
              target="_blank"
              rel="noopener noreferrer"
              className=" group w-full flex items-center justify-between px-5 py-4 bg-black/35 backdrop-blur-md border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
            >
              <div className="flex items-center gap-4">
                <span className="text-lg leading-none">♪</span>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
                    TikTok
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/50 group-hover:text-black/50 transition-colors duration-300">
                    +5 mil seguidores
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            {/* PARCERIAS */}
            <a
              href="#parcerias"
              className="   group   w-full   flex items-center justify-between   px-5 py-4   bg-brand-red/90   backdrop-blur-md   border border-white/40   text-white   transition-all duration-300   hover:bg-white   hover:text-black   hover:border-white "
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-black tracking-[0.15em]">
                    PARCERIAS
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/70 group-hover:text-black/50 transition-colors duration-300">
                    Conteúdo UGC para marcas
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
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
