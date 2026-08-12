import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data';

interface Props {
  onSelectCategory: (id: string) => void;
  onBack: () => void;
}

const BACKGROUND_IMAGE = '/gallery/chale-9.jpeg';

export function MenuScreen({ onSelectCategory, onBack }: Props) {
  const regularCategories = CATEGORIES.filter(c => !c.highlight);
  const highlightCategories = CATEGORIES.filter(c => c.highlight);

  return (
    <div className="relative flex flex-col min-h-full pb-20">
      {/* Background photo behind everything */}
      <img
        src={BACKGROUND_IMAGE}
        alt=""
        className="fixed inset-0 w-full h-full object-cover z-0"
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />

      {/* Header */}
      <header className="sticky top-0 z-20 bg-surface-50/80 backdrop-blur-md border-b border-surface-200/60 px-4 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-primary-900 hover:bg-surface-100 rounded-full transition-colors"
          aria-label="Voltar para o início"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="font-serif text-base sm:text-xl text-primary-900 font-semibold absolute left-1/2 -translate-x-1/2 text-center max-w-[220px] sm:max-w-none truncate">
          Guia Descanso na Serra
        </h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Content */}
      <main className="relative z-10 flex-1 px-4 py-6 md:px-8 lg:px-12 max-w-4xl w-full mx-auto">
        <p className="text-white text-sm text-center mb-8 px-4 drop-shadow-lg font-medium">
          Selecione uma categoria abaixo para ver as informações detalhadas.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regularCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onClick={() => onSelectCategory(category.id)}
                className="flex items-center gap-4 bg-white/15 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-white/25 text-left hover:bg-white/25 transition-all active:scale-[0.98]"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-white/15 border border-white/25 rounded-full flex items-center justify-center text-white">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="flex-1 font-medium text-white drop-shadow-sm">
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {highlightCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (regularCategories.length + index) * 0.05, duration: 0.3 }}
              onClick={() => onSelectCategory(category.id)}
              className="group flex items-center gap-4 bg-primary-900/50 backdrop-blur-xl border border-white/25 p-5 rounded-xl shadow-lg text-left hover:bg-primary-900/65 transition-all active:scale-[0.98] w-full mt-4"
            >
              <div className="w-14 h-14 flex-shrink-0 bg-white/15 border border-white/25 rounded-full flex items-center justify-center text-white">
                <Icon className="w-7 h-7 stroke-[1.5]" />
              </div>
              <div className="flex-1">
                <span className="font-serif text-lg text-white font-medium block">
                  {category.title}
                </span>
                <span className="text-surface-100/80 text-sm">
                  Veja o mapa e trace a rota até nós
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </motion.button>
          );
        })}
      </main>
    </div>
  );
}
