import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';
import { Carousel } from './Carousel';

interface Props {
  onEnter: () => void;
}

export function HomeScreen({ onEnter }: Props) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end pb-24 overflow-hidden">
      {/* Background carousel with overlay */}
      <Carousel
        images={GALLERY_IMAGES}
        fill
        className="absolute inset-0 z-0 w-full h-full"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-surface-100 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Guia do Hóspede
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif mb-8 leading-[1.1] drop-shadow-lg">
            Descanso <br />
            <span className="italic font-light">na Serra</span>
          </h1>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          onClick={onEnter}
          className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/20 transition-all w-full max-w-xs justify-center shadow-xl"
        >
          Ver Informações
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
}
