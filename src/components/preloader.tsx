import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import whiteLogoBg from "../assets/whiteLogoBg.png"

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center px-6"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <h2 className="text-[30vw] font-black italic uppercase">V&P</h2>
          </div>

          <div className="relative overflow-hidden mb-6 text-center">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-sans font-black italic uppercase text-white leading-none"
            >
              <img src={whiteLogoBg} alt="whiteLogoBg" width={250} />
            </motion.h1>
          </div>

          <div className="w-48 md:w-64 h-2 bg-white/10 relative overflow-hidden border border-white/20">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "0%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-brand-red"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="mt-8 text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-500 font-black">
              Rolândia — Estilo & Atitude
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
