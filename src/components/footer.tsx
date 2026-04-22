import React from "react";
import { Instagram, Facebook, MapPin, Phone, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-black text-white pt-20 pb-10 px-6 border-t-8 border-brand-red"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Coluna 1: Branding */}
        <Reveal delay={0.1}>
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none">
              <a href="#home" className="relative z-110">
                <img
                  className="rounded"
                  src="/src/assets/whiteLogoBg.png"
                  alt="Logo salão Vivian e Paulo"
                  width={150}
                />
              </a>
            </h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Cuidando do visual em Rolândia há mais de 10 anos. Qualidade,
              preço justo e o respeito que você merece.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white p-4 text-black hover:bg-brand-red hover:text-white transition-all shadow-[4px_4px_0_0_#ef4444]"
              >
                <Instagram size={24} strokeWidth={2.5} />
              </a>
              <a
                href="#"
                className="bg-white p-4 text-black hover:bg-brand-red hover:text-white transition-all shadow-[4px_4px_0_0_#ef4444]"
              >
                <Facebook size={24} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Coluna 2: Navegação */}
        <Reveal delay={0.2}>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-brand-red uppercase tracking-[0.2em] text-xs font-black mb-8">
              Navegação
            </h4>
            <ul className="space-y-4 text-sm font-black uppercase tracking-tighter">
              {["Início", "Sobre", "Serviços", "Galeria"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <ChevronRight size={16} className="text-brand-red" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Coluna 3: Contato */}
        <Reveal delay={0.3}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-brand-red uppercase tracking-[0.2em] text-xs font-black mb-8">
              Onde Estamos
            </h4>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex flex-col items-center md:items-start gap-3 mb-12">
                <MapPin size={24} className="text-brand-red" />
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Rua Tópazio, 865 - Vila Oliveira <br />
                  Rolândia - PR
                </a>
              </li>
              <li className="flex flex-col items-center md:items-start gap-3">
                <Phone size={24} className="text-brand-red" />
                <span className="text-2xl font-black text-white">
                  (43) 98821-9099
                </span>
                <span className="text-2xl font-black text-white">
                  (43) 99967-0078
                </span>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Coluna 4: Horários */}
        <Reveal delay={0.4}>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-brand-red uppercase tracking-[0.2em] text-xs font-black mb-8">
              Funcionamento
            </h4>
            <div className="border-2 border-white/20 p-6 w-full max-w-60">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[10px] uppercase font-black text-gray-500">
                    Seg — Sex
                  </span>
                  <span className="text-xs font-black">08h - 18h</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[10px] uppercase font-black text-gray-500">
                    Sábado
                  </span>
                  <span className="text-xs font-black">08h - 18h</span>
                </div>
                <p className="text-[10px] text-brand-red font-black uppercase text-center md:text-left">
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Créditos Finais */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-gray-600 font-black uppercase tracking-0.2em">
          © {currentYear} Studio Vivian & Paulo
        </p>
        <div className="flex items-center gap-2">
          <div className="h-1px w-4 bg-gray-800" />
          <p className="text-[10px] text-gray-600 font-black uppercase tracking-0.2em">
            Criado com ❤️ por <span className="text-gray-400">Paulo</span>
          </p>
          <div className="h-1px w-4 bg-gray-800" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
