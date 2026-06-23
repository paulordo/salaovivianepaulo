import React from "react";
import { Scissors, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-32 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <span className="text-brand-red font-black text-xs uppercase tracking-[0.3em] mb-4 block">
              Tabela de Serviços
            </span>
            <h2 className="text-5xl md:text-7xl font-sans font-black uppercase leading-none italic">
              Diversidade e <br />
              <span className="text-brand-red not-italic">Trabalho Sério.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LADO MASCULINO */}
          <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000000]">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 mb-10 border-b-2 border-brand-red pb-4 w-fit mx-auto">
                <Scissors className="text-black" size={28} />
                <h3 className="group text-2xl font-black uppercase italic tracking-tighter">
                  Barbearia
                </h3>
              </div>
            </Reveal>

            <div className="space-y-8">
              <PriceItem
                title="Corte Masculino"
                desc="Degradê, social ou máquina"
              />
              <PriceItem
                title="Corte Navalhado"
                desc="Acabamento impecável na navalha"
              />
              <PriceItem
                title="Barba na Navalha"
                desc="Barba desenhada e alinhada"
              />
              <PriceItem
                title="Combo Corte + Barba"
                desc="Degradê, social ou máquina e barba alinhados"
              />
              <PriceItem
                title="Combo Corte Navalhado + Barba"
                desc="Cabelo com acabamento impecável na navalha e barba alinhados"
              />
              <PriceItem title="Pezinho" desc="Limpeza do contorno do cabelo" />
              <PriceItem
                title="Sobrancelha"
                desc="Limpeza e alinhamento facial"
              />
              <PriceItem
                title="Alisamento"
                desc="Redução de volume e fios alinhados"
              />
              <PriceItem
                title="Tintura / Camuflagem"
                desc="Cobertura de fios brancos"
              />
              <PriceItem title="Luzes" desc="Iluminação natural e moderna" />
              <PriceItem
                title="Platinado / Nevou"
                desc="Descoloração global estilizada"
              />
              <PriceItem
                title="Hidratação Masculina"
                desc="Tratamento para brilho e maciez"
              />
            </div>
          </div>

          {/* LADO FEMININO */}
          <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#ef4444]">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 mb-10 border-b-2 border-brand-red pb-4 w-fit mx-auto">
                <Sparkles className="text-black" size={28} />
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                  Feminino
                </h3>
              </div>
            </Reveal>

            <div className="space-y-8">
              <PriceItem
                title="Progressiva S/ Formol"
                desc="Liso perfeito e brilho intenso"
              />
              <PriceItem
                title="Progressiva C/ Formol"
                desc="Redução de volume e alinhamento"
              />
              <PriceItem
                title="Selagem S/ Formol"
                desc="Tratamento disciplinante"
              />
              <PriceItem
                title="Selagem C/ Formol"
                desc="Fios alinhados e sem frizz"
              />
              <PriceItem title="Botox" desc="Reposição de massa e brilho" />
              <PriceItem
                title="Coloração Completa"
                desc="Cor vibrante e uniforme"
              />
              <PriceItem title="Retoque de Raiz" desc="Manutenção da cor" />
              <PriceItem
                title="Morena Iluminada"
                desc="Técnica de iluminação suave"
              />
              <PriceItem
                title="Corte C/ Escova"
                desc="Corte moderno com acabamento"
              />
              <PriceItem
                title="Corte S/ Escova"
                desc="Corte e finalização natural"
              />
              <PriceItem title="Sobrancelha" desc="Design e limpeza" />
              <PriceItem
                title="Cronograma Capilar"
                desc="Hidratação, Nutrição ou Reconstrução"
              />
              <PriceItem
                title="Banho de Verniz"
                desc="Brilho extremo e maciez"
              />
              <PriceItem
                title="Cauterização"
                desc="Recuperação profunda da fibra"
              />
            </div>
          </div>
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <p className="font-black uppercase text-xs tracking-widest text-gray-500">
              Aceitamos Pix e Cartões
            </p>
          </div>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] md:border-l md:pl-8 border-gray-200">
            * Química: Valores variam conforme o volume do cabelo
          </p>
        </div>
      </div>
    </section>
  );
};

const PriceItem: React.FC<{ title: string; desc: string }> = ({
  title,
  desc,
}) => {
  return (
    <div className="group flex flex-col items-center border-b border-gray-100 pb-4 last:border-0 text-center">
      <div className="flex justify-center items-baseline gap-4">
        <span className="text-lg md:text-xl font-black uppercase tracking-tighter text-black group-hover:text-brand-red transition-colors">
          {title}
        </span>
      </div>
      <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-gray-400 mt-1">
        {desc}
      </p>
    </div>  
  );
};

export default Services;
