import React, { useState } from "react";
import { Reveal } from "./reveal";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import selagem1 from "../assets/images/selagem1.webp";

// Adicionei arrays de imagens para os itens que você quer carrossel
const galleryItems = [
  {
    id: 1,
    category: "Alisamento",
    images: [
      "https://images.unsplash.com/photo-1596767746197-f5e9273c5240?q=80&w=500",
      "https://images.unsplash.com/photo-1560869713-7d0a29430863?q=80&w=500",
    ],
  },
  {
    id: 2,
    category: "Luzes",
    images: [
      "https://images.unsplash.com/photo-1596767746197-f5e9273c5240?q=80&w=500",
      "https://images.unsplash.com/photo-1560869713-7d0a29430863?q=80&w=500",
    ],
  },
  {
    id: 3,
    category: "Tintura",
    images: [selagem1],
  },
  {
    id: 4,
    category: "Corte Feminino",
    images: [selagem1],
  },
  {
    id: 5,
    category: "Corte Masculino",
    images: [
      "https://images.unsplash.com/photo-1549419163-f0ed00d3663b?q=80&w=500",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=500",
    ],
  },
  {
    id: 6,
    category: "Barba",
    images: [
      "https://images.unsplash.com/photo-1549419163-f0ed00d3663b?q=80&w=500",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=500",
    ],
  },
];

const GalleryCard: React.FC<{ item: (typeof galleryItems)[0] }> = ({
  item,
}) => {
  const [currentImg, setCurrentImg] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  return (
    <div className="relative group">
      {/* Moldura que aparece no hover (Seu estilo original) */}
      <div className="absolute -inset-2 border-[3px] border-brand-red opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />

      <div className="relative z-10 bg-black overflow-hidden border-[3px] border-black h-150">
        {/* Navegação do Carrossel */}
        {item.images.length > 1 && (
          <div className="absolute inset-0 z-20 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prev}
              className="bg-brand-red text-white p-1 border-2 border-black hover:scale-110 active:scale-95 transition-transform"
            >
              <ChevronLeft size={20} strokeWidth={4} />
            </button>
            <button
              onClick={next}
              className="bg-brand-red text-white p-1 border-2 border-black hover:scale-110 active:scale-95 transition-transform"
            >
              <ChevronRight size={20} strokeWidth={4} />
            </button>
          </div>
        )}

        {/* Imagem (Mantive suas classes de estilo e animação) */}
        <img
          src={item.images[currentImg]}
          alt={item.category}
          className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100"
        />

        {/* Etiqueta (Seu estilo original) */}
        <div className="absolute bottom-0 left-0 bg-brand-red px-4 py-2 z-30 border-t-3 border-r-3 border-black">
          <span className="text-white font-black text-xs uppercase tracking-tighter">
            {item.category}{" "}
            {item.images.length > 1 &&
              `(${currentImg + 1}/${item.images.length})`}
          </span>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-16 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho igual ao seu */}
        <div className="mb-16 md:mb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.75 w-12 bg-brand-red" />
              <span className="text-brand-red font-black text-sm uppercase tracking-[0.2em]">
                Galeria
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-8xl font-sans font-black uppercase leading-[0.8] italic text-black">
              Resultados <br />
              <span className="text-brand-red not-italic">Reais.</span>
            </h2>
          </Reveal>
        </div>

        {/* Grid com o novo componente GalleryCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <GalleryCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* Chamada Final Social*/}
        <div className="mt-24 border-4 border-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[12px_12px_0_0_#000000]">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black uppercase italic leading-none mb-2">
              Gostou do que viu?
            </h3>
            <p className="text-gray-600 font-bold uppercase text-xs tracking-widest">
              Postamos transformações novas todos os dias no Instagram.
            </p>
          </div>

          <a
            className="flex items-center justify-center gap-4 w-full md:w-auto bg-brand-red text-white px-10 py-5 font-black text-sm uppercase tracking-tighter transition-all hover:bg-black hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none"
            href="https://www.instagram.com/salaovivian_paulo"
            target="_blank"
            rel="noopener noreferrer"
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
