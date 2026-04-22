import React from "react";
import { Reveal } from "./reveal";

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative py-5   overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LADO IMAGEM */}
          <div className="relative order-last md:order-first">
            <div className="absolute -top-4 -left-4 w-full h-full border-[3px] border-brand-red z-0" />
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800"
              className="relative z-10 w-full h-100 md:h-150 object-cover transition-all duration-700 shadow-2xl"
              alt="Vivian e Paulo"
            />
          </div>

          {/* LADO TEXTO */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-8 bg-brand-red" />
                <span className="text-brand-red font-black tracking-[0.2em] text-xs uppercase">
                  Nossa História
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <h2 className="text-5xl md:text-7xl font-sans font-black text-black mb-8 leading-[0.9] uppercase italic">
                Da nossa família
                <br />
                <span className="text-brand-red not-italic">
                  Para sua família.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
                <p>
                  No Salão Vivian e Paulo cuidamos do seu cabelo com amor,
                  profissionalismo e produtos de qualidade. Especialistas em
                  selagem, botox, progressiva, hidratação, cortes, escova,
                  barbas e sobrancelhas. Nosso compromisso é entregar cabelos
                  lindos, saudáveis e clientes satisfeitas.
                </p>

                {/* Destaque "Raiz" */}
                <div className="bg-black p-8 shadow-[8px_8px_0_0_#ef4444]">
                  <p className="italic text-white font-bold text-xl leading-snug">
                    Serviço de qualidade, ambiente de família e um preço que
                    cabe em seu bolso
                  </p>
                </div>

                <p className="pt-4">
                  Seja para um corte de cabelo moderno, uma barba bem feita ou
                  aquele tratamento feminino caprichado, aqui você encontra
                  profissionais que te entendem.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
