import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import whiteLogo from "../assets/whiteLogo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    // { name: "Galeria", href: "#galeria" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-100 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white py-3 shadow-md"
            : "bg-transparent py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <a href="#home" className="relative z-110">
            <img src={whiteLogo} alt="whiteLogo" width={150} />
          </a>

          {/* nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-black ${scrolled ? "text-black" : "text-white"}  hover:text-brand-red transition-colors`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5543999670078"
              target="_blank"
              className={`bg-brand-red text-white px-8 py-3 rounded-md text-xs uppercase tracking-tighter font-black hover:bg-black transition-all shadow-lg shadow-brand-red/20`}
            >
              Agendar Agora
            </a>
          </div>

          {/* MOBILE BURGER */}
          <button
            className="md:hidden relative z-110 p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-105 bg-white flex flex-col pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-black uppercase tracking-tighter border-b-2 border-gray-50 pb-2 hover:text-brand-red"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto mb-12 space-y-8">
              <a href="https://wa.me/5543999670078 " target="_blank">
                <button className="mb-10 w-full bg-brand-red text-white py-5 rounded-xl text-lg font-black uppercase tracking-tighter shadow-xl">
                  Marcar no WhatsApp
                </button>
              </a>

              <div className="flex justify-between items-center">
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/salaovivian_paulo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    className="text-black"
                  >
                    <Instagram size={28} strokeWidth={2.5} />
                  </a>
                  <a
                    href="https://www.facebook.com/paulo.cezar.oli"
                    target="_blank"
                    className="text-black"
                  >
                    <Facebook size={28} strokeWidth={2.5} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@viviansemfiltro1"
                    target="_blank"
                    className="text-black"
                  >
                    <svg
                      width="28"
                      height="28"
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
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Rolândia — PR
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
