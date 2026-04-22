import React from "react";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Footer from "./components/footer";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import About from "./components/about";
// import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Preloader from "./components/preloader";
import { Reveal } from "./components/reveal";
import whiteLogo from "./assets/whiteLogo.png";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Preloader />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        {/* <Gallery /> */}

        <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto text-center border-t-[3px] border-black">
          <div className="max-w-4xl mx-auto space-y-12">
            <Reveal>
              <img
                className="d-flex m-auto pb-5"
                src={whiteLogo}
                alt="Logo do Salão"
                aria-label="Logo do Salão Vivian e Paulo"
                width={600}
              />
              {/* <h2 className="text-5xl md:text-8xl font-sans font-black text-brand-red leading-[0.85] uppercase italic">
                Salão <br />
                <span className="text-brand-black not-italic">Vivian & Paulo</span>
              </h2> */}
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-gray-800 leading-relaxed text-lg md:text-2xl font-medium max-w-2xl mx-auto">
                Mais do que um corte ou uma cor, queremos que você se sinta em
                casa. Venha nos visitar em Rolândia!
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-8 bg-black" />
                  <p className="text-black uppercase tracking-[0.3em] text-xs font-black">
                    Siga nosso dia a dia
                  </p>
                  <div className="h-0.5 w-8 bg-black" />
                </div>

                <div className="flex justify-center gap-6">
                  {/* Botões sociais */}
                  <a
                    href="https://www.instagram.com/salaovivian_paulo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    className="bg-white border-[3px] border-black p-5 text-black hover:bg-brand-red hover:text-white transition-all transform hover:-translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0_0_#000000] hover:shadow-none"
                  >
                    <Instagram size={32} strokeWidth={2.5} />
                  </a>
                  <a
                    href="https://www.facebook.com/paulo.cezar.oli"
                    target="_blank"
                    className="bg-white border-[3px] border-black p-5 text-black hover:bg-brand-red hover:text-white transition-all transform hover:-translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0_0_#000000] hover:shadow-none"
                  >
                    <Facebook size={32} strokeWidth={2.5} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@viviansemfiltro1"
                    target="_blank"
                    className="bg-white border-[3px] border-black p-5 text-black hover:bg-brand-red hover:text-white transition-all transform hover:-translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0_0_#000000] hover:shadow-none"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <a
        href="https://wa.me/5543999670078"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] border-[3px] border-black p-4 md:p-5 shadow-[6px_6px_0_0_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 z-99 group flex items-center gap-3 md:mb-10"
      >
        <MessageCircle color="black" size={30} strokeWidth={2.5} />
        <span className="text-black font-black uppercase text-xs tracking-tighter hidden md:block">
          Agende seu horário
        </span>
      </a>
    </div>
  );
};

export default App;
