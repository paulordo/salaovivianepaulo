import React from 'react';
import { Scissors, Sparkles } from 'lucide-react';
import { Reveal } from './reveal';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-32 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <span className="text-brand-red font-black text-xs uppercase tracking-[0.3em] mb-4 block">Tabela de Serviços</span>
            <h2 className="text-5xl md:text-7xl font-sans font-black uppercase leading-none italic">
              Preço Justo, <br />
              <span className="text-brand-red not-italic">Trabalho Sério.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* LADO MASCULINO */}
          <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000000]">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 mb-10 border-b-2 border-brand-red pb-4 w-fit">
                <Scissors className="text-black" size={28} />
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Barbearia</h3>
              </div>
            </Reveal>

            <div className="space-y-8">
              <PriceItem title="Corte Masculino" price="R$30" desc="Degradê, social ou máquina" />
              <PriceItem title="Corte Masculino Navalhado" price="R$35" desc="Degradê com acabamento navalhado" />
              <PriceItem title="Barba na Navalha" price="R$20" desc="Barba desenhada e bem acabada" />
              <PriceItem title="Sobrancelha" price="R$15" desc="Limpeza e alinhamento facial" />
              <PriceItem title="Tintura" price="A partir de R$30" desc="Coloração capilar com acabamento profissional" />
              <PriceItem title="Alisamento" price="A partir de R$70" desc="Redução de volume e fios alinhados com brilho" />
            </div>
          </div>

          {/* LADO FEMININO */}
          <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#ef4444]">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 mb-10 border-b-2 border-brand-red pb-4 w-fit">
                <Sparkles className="text-black" size={28} />
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Feminino</h3>
              </div>
            </Reveal>

            <div className="space-y-8">
              <PriceItem title="Corte Feminino" price="R$80" desc="Corte, lavagem e secagem" />
              <PriceItem title="Hidratação" price="R$60" desc="Brilho e maciez imediata" />
              <PriceItem title="Progressiva" price="A partir de R$180" desc="Liso perfeito sem danificar o fio" />
              <PriceItem title="Botox" price="R$170" desc="Redução de volume, brilho e maciez imediata" />
              <PriceItem title="Selagem" price="R$180" desc="Alinhamento dos fios, brilho e maciez imediata" />
              <PriceItem title="Mechas" price="A partir de R$200" desc="Técnicas de iluminação moderna" />
            </div>
          </div>

        </div>
        
        {/* Rodapé da Seção */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <p className="font-black uppercase text-xs tracking-widest text-gray-500">Aceitamos Pix e Cartões</p>
           </div>
           <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] md:border-l md:pl-8 border-gray-200">
            * Química: Valores variam conforme o volume do cabelo
          </p>
        </div>
      </div>
    </section>
  );
};

const PriceItem: React.FC<{title: string, price: string, desc: string}> = ({ title, price, desc }) => (
  <div className="group border-b border-gray-100 pb-4 last:border-0">
    <div className="flex justify-between items-baseline">
      <span className="text-lg md:text-xl font-black uppercase tracking-tighter text-black group-hover:text-brand-red transition-colors">
        {title}
      </span>
      <span className="text-lg md:text-xl font-black text-brand-red">
        {price}
      </span>
    </div>
    <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-gray-400 mt-1">
      {desc}
    </p>
  </div>
);

export default Services;